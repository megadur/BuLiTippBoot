/**
 * Livebox.
 * Updates every minute on
 * the actual livebox -
 * configuration
 *
 * @fixme Laden von vergangenen und kuenftigen Spieldaten
 * @fixme Spieltagsnavigation fuer jeden Wettbewerb einbauen
 */
$.fn.livebar = function(options) {
    return this.each(function() {
        var o = $.extend({
            language: "de",
            active: "SUP",
            leagues: [],
            season: window["saison"],
            refreshRate: 10000,
            url: "/livebox/snippets/live/LANGUAGE_LNAME.json",
            baseUrl: "/LANGUAGE/inc/livebox/LEAGUE/SEASON/MATCHDAY.html",
            liveUrl: "/LANGUAGE/inc/livebox/LEAGUE/current_MATCHDAY.html"
        }, options),

        box = $(this),
        id = box.attr("id"),
        timeout = false,
        navigationContainer = $("<div class=\"livebox_title\"></div>").appendTo(box),
        leagueContainer = $("<div class=\"leagues\"></div>").appendTo(box),

        leagueKeys = {
            "BL1" : "liga",
            "BL2" : "liga2",
            "DFB" : "dfb",
            "DF2" : "dfb2",
            "SUP" : "supercup",
            "CHL" : "cl",
            "UEP" : "el",
            "SPE" : "special",
            "LSP" : ""
        },
        leagueNames = {
            "liga"     : "BL1",
            "liga2"    : "BL2",
            "dfb"      : "DFB",
            "dfb2"     : "DF2",
            "supercup" : "SUP",
            "cl"       : "CHL",
            "el"       : "UEP",
            "special"  : "SPE",
            ""         : "LSP"
        },
        leagueIds = {
            "liga"     : 51,
            "liga2"    : 52,
            "dfb"      : 60,
            "dfb2"     : 60,
            "supercup" : 61,
            "cl"       : 72,
            "el"       : 74,
            "special"  : 76,
            ""         : 81
        },
        leagueUrls = {
            "liga"     : "/co12/bundesliga/",
            "liga2"    : "/co3/bundesliga-2/",
            "dfb"      : "/co33/",
            "dfb2"     : "/co33/",
            "supercup" : "/co1416/",
            "cl"       : "/co19/",
            "el"       : "/co563/",
            "special"  : "/co1181/",
            ""         : "/co571/"
        },
        leagueAtiNames = {
            "BL1" : "Bundesliga",
            "BL2" : "2Bundesliga",
            "DFB" : "DFBPokal",
            "DF2" : "DFBPokal",
            "SUP" : "Supercup",
            "CHL" : "ChampionsLeague",
            "UEP" : "EuropaLeague",
            "SPE" : "Spezial",
            "LSP" : "International"
        },
        leagueMatchday = {
            "BL1" : window.liga_spieltag,
            "BL2" : window.liga2_spieltag,
            "DFB" : 1,
            "DF2" : 1,
            "SUP" : 1,
            "CHL" : 4,
            "UEP" : 4,
            "SPE" : 1,
            "LSP" : 6
        },
        leagueLiveday = leagueMatchday,

        games = {},


        /**
         * HTML-Daten laden (statische Box)
         */
        //loadBase = function() {
        //    return;
        //    var url = o.baseUrl;
        //    if (liveday == o.matchday)
        //        url = o.liveUrl;
        //    url = url.replace(/LANGUAGE/g, o.language)
        //             .replace(/LEAGUE/g, o.league)
        //             .replace(/LNAME/g, leagueNames[o.league])
        //             .replace(/SEASON/g, o.season)
        //             .replace(/MATCHDAY/g, o.matchday);
        //    // Basis-Daten laden und einbinden
        //    $.ajax(url, {
        //        success: function(data) {
        //            leagueContainer.html(data);
        //            if (liveday == o.matchday) {
        //                if (games.length)
        //                    showData();
        //                loadData();
        //                if (o.league != "liga" && o.league != "liga2") {
        //                    leagueContainer.find(".liveboxfooter .table").hide();
        //                    leagueContainer.find(".matchday").hide();
        //                    tickerhtml = leagueContainer.find(".liveboxfooter .ticker").html();
        //                    tickerhtml = tickerhtml.replace(/\/md[0-9]*/g, "");
        //                    leagueContainer.find(".liveboxfooter .ticker").html(tickerhtml);
        //                }
        //            }
        //        }
        //    });
        //},

        /**
         * JSON-Live-Daten laden
         */
        loadData = function() {
            var url = o.url + "?" + Math.round(new Date().getTime() / 1000);
            url = url.replace(/LANGUAGE/g, o.language)
                     .replace(/LEAGUE/g, leagueKeys[o.active])
                     .replace(/LNAME/g, o.active)
                     .replace(/SEASON/g, o.season)
                     .replace(/MATCHDAY/g, leagueMatchday[o.active]);
            // JSON-Daten laden und von parseData verarbeiten lassen
            $.getJSON(url, parseData);
        },

        /**
         * Daten verarbeiten
         */
        parseData = function(data) {
            games = $.extend(games, data);
            // Daten anzeigen lassen
            showData();
            // Nach einem gewissen Zeitintervall die Daten aktualisieren
            if (timeout)
                clearTimeout(timeout);
            timeout = setTimeout(loadData, o.refreshRate);
        },

        /**
         * Daten anzeigen
         */
        showData = function() {
            gamesFound = 0;
            $.each(games, function(gameId, game) {
                var score = ["-","-"];
                if (typeof(game.goals) == "string") {
                    goals = game.goals.split(":");
                    if (goals.length == 2) {
                        score = goals;
                    }
                }

                box.find(".match.gameID-" + gameId + " .home-score").text(score[0]);
                box.find(".match.gameID-" + gameId + " .guest-score").text(score[1]);
                box.find("ul.match.gameID-" + gameId + " .score").text(score[0] + '-' + score[1]);
                var match           = box.find(".match.gameID-" + gameId + "");
                var matchId         = match.attr("data-gameId");
                var season          = match.attr("data-season");
                var matchday        = match.attr("data-matchday");
                var league          = match.attr("data-league");
                var start           = match.attr("data-start");
                var livetickerstart = match.attr("data-livetickerstart");
                var livetickerend   = match.attr("data-livetickerend");
                var report          = match.attr("data-report");
                var link            = "http://liveticker.bundesliga.de/" + o.language + leagueUrls[league] + "#im" + matchId;
                var isLive          = false;
                var hasLiveLink     = true;
                var now             = Math.round(new Date().getTime() / 1000);

                gamesFound += match.length;

                // wenn kein Status vorhanden, gehen wir von einer Vorschau aus
                if (!game.match_status) {
                    game.match_status = "prematch";
                }

                // Wenn Liveticker aktiv, dann als "live" anzeigen
                if (livetickerstart && livetickerend) {
                    var livetickerstartDate = new Date(livetickerstart.substr(0,4), livetickerstart.substr(4,2), livetickerstart.substr(6,2), livetickerstart.substr(8,2), livetickerstart.substr(10,2), livetickerstart.substr(12,2));
                    var livetickerendDate = new Date(livetickerend.substr(0,4), livetickerend.substr(4,2), livetickerend.substr(6,2), livetickerend.substr(8,2), livetickerend.substr(10,2), livetickerend.substr(12,2));
                    var livetickerstartTime = Math.round(livetickerstartDate.getTime() / 1000);
                    var livetickerendTime = Math.round(livetickerendDate.getTime() / 1000);
                    if (livetickerstartTime < now && now < livetickerendTime) {
                        game.match_status = "running";
                    }
                }


                switch(game.match_status) {
                    case "prematch":
                        // Wenn das Spiel nicht in weniger als 15 Minuten startet, dann Vorberichtslink nehmen
                        if (parseInt(start) - 900 > now) {
                            if (league == "liga" || league == "liga2") {
                                link = "/" + o.language + "/" + league + "/matches/" + season + "/index.php?bmi=" + matchId + "&reiter=v&tag=" + matchday;
                            } else {
                                link = "";
                            }
                            if (report) {
                                link = report;
                            }

                            hasLiveLink = false;
                        } else {
                            isLive = true;
                        }
                        break;
                    case "halftime":
                    case "running":
                        // Wir behalten den Livetickerlink
                        isLive = true;
                        break;
                    default:
                        // Spielberichtslink
                        if (league == "liga" || league == "liga2") {
                            link = "/" + o.language + "/" + league + "/matches/" + season + "/index.php?bmi=" + matchId + "&reiter=b&tag=" + matchday;
                        } else {
                            link = "";
                        }
                        if (report) {
                            link = report;
                        }

                        hasLiveLink = false;
                }
                // Wenn schon verlinkt, dann Link entfernen
                if (match.find("a").length) {
                    match.find("a").children().unwrap();
                }
                //match.find(".next").hide();

                // Link einbauen
                if (link) {
                    var linkContainer = $("<a></a>");
                    linkContainer.attr("href", link);
                    linkContainer.attr("target", hasLiveLink ? "_blank" : "_self");
                    if (hasLiveLink) {
                        // Liveticker im Popup oeffnen
                        linkContainer.click(function() {
                            fenster($(this).attr("href"), '');
                            return false;
                        });
                    }
                    match.wrapInner(linkContainer);
                    //match.find(".next").show();
                }

                // Live-Spiele markieren
                match.removeClass("live");
                if (isLive) {
                    match.addClass("live");
                    if (match.find(".time p").length) {
                        match.find(".time p").text("live");
                    } else {
                        match.find(".time").text("live");
                    }
                } else {
                    time = match.attr("data-time");
                    if (match.find(".time p").length) {
                        match.find(".time p").text(time);
                    } else {
                        match.find(".time").text(time);
                    }
                }
            });

            // pruefen, ob die Livedaten wirklich zum aktuellen Live-Spieltag passen
            if (leagueMatchday[o.active] == leagueLiveday[o.active] && gamesFound == 0 && (o.active == "BL1" || o.active == "BL2")) {
                liveday = 0;
                //loadBase();
            }
        },

        addLeague = function(leagueKey) {
            var container = $("<div data-league=\"" + leagueKey + "\"></div>");
            leagueContainer.append(container);
            loadLeague(leagueKey, container);
        },

        addLink = function(container, title, url, target) {
            var code = "<li class=\"title\">"+title+"</li>";
            if (url) {
                code = "<li><a href=\""+url+"\" target=\""+target+"\">"+title+"</a></li>";
            }
            container.find(".more_info ul").append(code);
        },

        loadLeague = function(leagueKey, container) {
            var url = o.baseUrl;
            if (leagueLiveday[leagueKey] == leagueMatchday[leagueKey])
                url = o.liveUrl;
            url = url.replace(/LANGUAGE/g, o.language)
                     .replace(/LEAGUE/g, leagueKeys[leagueKey])
                     .replace(/LNAME/g, leagueKey)
                     .replace(/SEASON/g, o.season)
                     .replace(/MATCHDAY/g, leagueMatchday[leagueKey]);
            // Basis-Daten laden und einbinden
            $.ajax(url, {
                success: function(data) {
                    container.html(data);
                    if (leagueLiveday[leagueKey] == leagueMatchday[leagueKey]) {
                        if (games.length)
                            showData();
                        loadData();
                        if (leagueKey != "BL1" && leagueKey != "BL2") {
                            container.find(".table").remove();
                            tickerhtml = container.find(".ticker").html();
                            tickerhtml = tickerhtml.replace(/\/md[0-9]*/g, "");
                            container.find(".ticker").html(tickerhtml);
                        }
                    }

                    // Link container

                    // Titel merken
                    var title = container.find(".more_info li").eq(0).text();

                    // Je nach Wettbewerb Titel und Links hinzufuegen
                    container.find(".more_info ul").empty();
                    switch (leagueKey) {
                        case "BL1":
                            addLink(container, leagueMatchday[leagueKey] + ". Spieltag");
                            //addLink(container, "Spielplan", "/"+o.language+"/liga/matches/"+o.season+"/", "_self");
                            addLink(container, "Liveticker", "javascript:fenster('http://liveticker.bundesliga.de/" + o.language + leagueUrls["liga"]+"');", "_self");
                            //addLink(container, "Tabelle", "/"+o.language+"/liga/tabelle/", "_self");
                            break;
                        case "BL2":
                            addLink(container, leagueMatchday[leagueKey] + ". Spieltag");
                            //addLink(container, "Spielplan", "/"+o.language+"/liga2/matches/"+o.season+"/", "_self");
                            addLink(container, "Liveticker", "javascript:fenster('http://liveticker.bundesliga.de/" + o.language + leagueUrls["liga2"]+"');", "_self");
                            //addLink(container, "Tabelle", "/"+o.language+"/liga2/tabelle/", "_self");
                            break;
                        case "SUP":
                            container.find(".more_info").addClass("no-title");
                            addLink(container, "Supercup", "/"+o.language+"/supercup/", "_self");
                            addLink(container, "Videos", "/"+o.language+"/bundesliga-tv/", "_self");
                            break;
                        case "DFB":
                        case "DF2":
                            addLink(container, "2. Runde");
                            addLink(container, "Ergebnisse", "/"+o.language+"/spielplaene/dfbpokal/", "_self");
                            break;
                        case "UEP":
                            //addLink(container, "Qualifikation");
                            addLink(container, "Vorrunde");
                            addLink(container, "Ergebnisse", "/"+o.language+"/uefa/spielplan/", "_self");
                            break;
                        case "CHL":
                            //addLink(container, "Qualifikation");
                            addLink(container, "Vorrunde");
                            addLink(container, "Ergebnisse", "/"+o.language+"/cl/spielplan/", "_self");
                            break;
                        case "LSP":
                            addLink(container, "L\u00e4nderspiel");
                            addLink(container, "Liveticker", "javascript:fenster('http://liveticker.bundesliga.de/" + o.language + leagueUrls[""]+"');", "_self");
                            break;
                        case "SPE":
                            addLink(container, "Supercup");
                            addLink(container, "Liveticker", "javascript:fenster('http://liveticker.bundesliga.de/" + o.language + leagueUrls["special"]+"');", "_self");
                            break;
                    }

                    if (container.find(".more_info a").length == 1)
                        container.find(".more_info").addClass("one_link_box");
                    else if (container.find(".more_info a").length == 2)
                        container.find(".more_info").addClass("two_link_box");
                    else
                        container.find(".more_info").addClass("no_link_box");

                    // Nur ein Spiel: Sonderformat
                    if (container.find(".match").length == 1) {

                        var gameId = container.find(".match").attr("data-gameId");
                        var league = container.find(".match").attr("data-league");
                        var matchday = container.find(".match").attr("data-matchday");
                        var season = container.find(".match").attr("data-season");
                        var start = container.find(".match").attr("data-start");
                        var livetickerstart = container.find(".match").attr("data-livetickerstart") || "";
                        var livetickerend   = container.find(".match").attr("data-livetickerend") || "";
                        var report = container.find(".match").attr("data-report") || "";
                        var time = container.find(".match .time").text();
                        var score = container.find(".match .home-score").text() + ':' + container.find(".match .guest-score").text();
                        var homelogo = container.find(".match .homelogo").html().replace(/\/20\//g, "/50/");
                        var homename = container.find(".match .home").attr('title');
                        var guestlogo = container.find(".match .guestlogo").html().replace(/\/20\//g, "/50/");
                        var guestname = container.find(".match .guest").attr('title');

                        var code = '<ul class="match gameID-'+gameId+'" data-gameId="'+gameId+'" data-league="'+league+'" data-matchday="'+matchday+'" data-season="'+season+'" data-start="'+start+'" data-livetickerstart="'+livetickerstart+'" data-livetickerend="'+livetickerend+'" data-report="'+report+'">'+
                            '    <li class="time">'+
                            '        <p>'+time+'</p>'+
                            '    </li>'+
                            '    <li class="first_team">'+
                            '        <div class="img_two_teams">'+homelogo+'</div>'+
                            '        <p>'+homename+'</p>'+
                            '    </li>'+
                            '    <li class="score">'+
                            '        '+score+''+
                            '    </li>'+
                            '    <li class="second_team">'+
                            '        <div class="img_two_teams">'+guestlogo+'</div>'+
                            '        <p>'+guestname+'</p>'+
                            '    </li>'+
                            '</ul>';

                        container.find(".matchday").html(code);
                        container.find(".matchday").addClass("two_teams");
                    } else if (container.find(".match").length > 9) {
                        container.find(".matchday").addClass("more_than_nine_teams");
                        var i = 0;
                        var start = 0;
                        var length = container.find(".matchday .match").length;
                        container.find(".matchday .match").each(function() {
                            if (i++ >= 8) {
                                $(this).hide();
                            }
                        });

                        var previous = $("<li class=\"first-match\"><img src=\"/pics/_livebox2013/arrow-left.png\" class=\"middle-arrow\" alt=\"arrow\"></li>");
                        var next = $("<li class=\"last-match\"><img src=\"/pics/_livebox2013/arrow-right.png\" class=\"middle-arrow\" alt=\"arrow\"></li>");

                        previous.click(function(){
                            if (start > 0) {
                                start--;
                                i = 0;
                                container.find(".matchday .match").each(function() {
                                    if (i >= 8 + start || i < start) {
                                        $(this).hide();
                                    } else {
                                        $(this).show();
                                    }
                                    i++;
                                });
                            }
                        });
                        next.click(function(){
                            if (start < length - 8) {
                                start++;
                                i = 0;
                                container.find(".matchday .match").each(function() {
                                    if (i >= 8 + start || i < start) {
                                        $(this).hide();
                                    } else {
                                        $(this).show();
                                    }
                                    i++;
                                });
                            }
                        });

                        container.find(".matchday ul").prepend(previous);
                        container.find(".matchday ul").append(next);

                    } else {
                        container.find(".matchday").addClass("nine_teams");
                        container.find(".match:first").addClass("first-match");
                        container.find(".match:last").addClass("last-match");
                    }

                    // Zeit merken
                    container.find(".match").each(function() {
                        $(this).attr("data-time", $(this).find(".time").text());
                    });
                }
            });
        },

        showLeague = function(key) {
            box.find(".leagues > [data-league]").hide();
            box.find(".leagues > [data-league=" + key + "]").show();
            o.active = key;
            loadData();
        },

        /**
         * Box initialisieren und Events binden
         */
        init = function() {
            // Wettbewerbe laden
            var navigation = $("<ul></ul>");
            var activeKey = 0;
            var numberOfLeagues = 0;
            $.each(o.leagues, function(key, value) {
                if (typeof(value.label) !== "undefined") {
                    navigation.append("<li data-league=\"" + value.key + "\">" + value.label + "</li>");
                    addLeague(value.key);
                    if (value.key == o.active)
                        activeKey = key;
                    numberOfLeagues ++;
                }
            });
            navigationContainer.append(navigation);
            box.find(".livebox_title [data-league=" + o.active + "]").addClass("active");

            box.find(".leagues > [data-league]").hide();
            box.find(".leagues > [data-league=" + o.active + "]").show();

            // Wechseln des Wettbewerbes
            navigationContainer.find("li").click(function(){
                var newleague = $(this).attr("data-league");
                if (newleague) {
                    box.find(".livebox_title [data-league]").removeClass("active");
                    box.find(".livebox_title [data-league=" + newleague + "]").addClass("active");
                    showLeague(newleague);
                }
            });

            // Formatierung der Wettbewerbsauswahl
            if (navigationContainer.find("[data-league]").length == 1) {
                navigationContainer.addClass("single_title");
            } else if (navigationContainer.find("[data-league]").length == 2) {
                navigationContainer.addClass("double_title");
            } else {
                // Scrollfunktion
                navigationContainer.addClass("more_than_two_title");
                navigationContainer.find("li").remove();
                var previous = $("<li class=\"previous\"><img src=\"/pics/_livebox2013/arrow-top-bg.png\" class=\"middle-arrow\" alt=\"arrow\"></li>");
                var active = $("<li class=\"active\">"+o.leagues[activeKey].label+"</li>");
                var next = $("<li class=\"last next\"><img src=\"/pics/_livebox2013/arrow-bottom-bg.png\" class=\"middle-arrow\" alt=\"arrow\"></li>");
                navigationContainer.find("ul").append(previous);
                navigationContainer.find("ul").append(active);
                navigationContainer.find("ul").append(next);

                previous.click(function() {
                    activeKey = (activeKey - 1 + numberOfLeagues) % numberOfLeagues;
                    newleague = o.leagues[activeKey].key;
                    active.text(o.leagues[activeKey].label);
                    showLeague(newleague);
                });
                next.click(function() {
                    activeKey = (activeKey + 1) % numberOfLeagues;
                    newleague = o.leagues[activeKey].key;
                    active.text(o.leagues[activeKey].label);
                    showLeague(newleague);
                });
            }


            // Spieltagsnavigation
            $(document).bind("click", "#"+id+" .matchday .back, #"+id+" .matchday .next", function() {
                if ($(this).hasClass("disabled"))
                    return false;

                if ($(this).hasClass("back"))
                    leagueMatchday[o.active]--;

                if ($(this).hasClass("next"))
                    leagueMatchday[o.active]++;

                $(this).addClass("disabled");
                //loadBase();

                return true;
            });

            // AT-Internet-Tracking

            // Livetickerlink
            $(document).bind("click", "#" + id + " .ticker a", function() {
                xt_med('C', '1', 'Livebox::' + leagueAtiNames[o.active] + '::liveticker', 'A');
            });
            // Tabellenlink
            $(document).bind("click", "#" + id + " .table a", function() {
                return xt_click(this, 'C', '1', 'Livebox::' + leagueAtiNames[o.active] + '::tabelle', 'A');
            });
            // Spielelinks
            $(document).bind("click", "#" + id + " .match a", function() {
                // Links zu den Spielberichten
                var link = $(this).attr("href");
                var name = $(this).find(".homename").text() + "_" + $(this).find(".guestname").text();
                if (link && link.indexOf("stats/matchday") !== -1)
                    return xt_click(this, 'C', '1', 'Livebox::' + leagueAtiNames[o.active] + '::bericht::' + name, 'A');

                return true;
            });
            $(document).bind("click", "#" + id + " .match", function() {
                // Links zu den Livetickern
                var link = $(this).find("a").attr("href");
                var name = $(this).find(".homename").text() + "_" + $(this).find(".guestname").text();
                if (typeof(link) == "string" && link.indexOf("liveticker") !== -1)
                    xt_med('C', '1', 'Livebox::' + leagueAtiNames[o.active] + '::liveticker::' + name, 'A');
            });

        };

        init();
    });
}
