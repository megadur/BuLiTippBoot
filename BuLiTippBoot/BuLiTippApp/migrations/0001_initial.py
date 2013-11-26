# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'News'
        db.create_table('BuLiTippApp_news', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('author', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['auth.User'])),
            ('datum', self.gf('django.db.models.fields.DateTimeField')()),
            ('text', self.gf('django.db.models.fields.CharField')(max_length=1000)),
        ))
        db.send_create_signal('BuLiTippApp', ['News'])

        # Adding model 'Spielzeit'
        db.create_table('BuLiTippApp_spielzeit', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('bezeichner', self.gf('django.db.models.fields.CharField')(max_length=50)),
            ('saisontipp_end', self.gf('django.db.models.fields.DateTimeField')(null=True)),
        ))
        db.send_create_signal('BuLiTippApp', ['Spielzeit'])

        # Adding model 'Spieltag'
        db.create_table('BuLiTippApp_spieltag', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('spielzeit', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['BuLiTippApp.Spielzeit'])),
            ('datum', self.gf('django.db.models.fields.DateTimeField')()),
            ('nummer', self.gf('django.db.models.fields.IntegerField')()),
        ))
        db.send_create_signal('BuLiTippApp', ['Spieltag'])

        # Adding model 'Verein'
        db.create_table('BuLiTippApp_verein', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=75)),
        ))
        db.send_create_signal('BuLiTippApp', ['Verein'])

        # Adding model 'Spiel'
        db.create_table('BuLiTippApp_spiel', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('heimmannschaft', self.gf('django.db.models.fields.related.ForeignKey')(related_name='heimmannschaft', to=orm['BuLiTippApp.Verein'])),
            ('auswaertsmannschaft', self.gf('django.db.models.fields.related.ForeignKey')(related_name='auswaertsmannschaft', to=orm['BuLiTippApp.Verein'])),
            ('spieltag', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['BuLiTippApp.Spieltag'])),
            ('ergebniss', self.gf('django.db.models.fields.CharField')(max_length=5)),
            ('datum', self.gf('django.db.models.fields.DateTimeField')(null=True)),
        ))
        db.send_create_signal('BuLiTippApp', ['Spiel'])

        # Adding model 'Tipp'
        db.create_table('BuLiTippApp_tipp', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('user', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['auth.User'])),
            ('spiel', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['BuLiTippApp.Spiel'])),
            ('ergebniss', self.gf('django.db.models.fields.CharField')(max_length=5)),
        ))
        db.send_create_signal('BuLiTippApp', ['Tipp'])

        # Adding model 'Kommentar'
        db.create_table('BuLiTippApp_kommentar', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('datum', self.gf('django.db.models.fields.DateTimeField')()),
            ('text', self.gf('django.db.models.fields.CharField')(max_length=500)),
            ('user', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['auth.User'])),
            ('reply_to', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['BuLiTippApp.Kommentar'], null=True)),
            ('spieltag', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['BuLiTippApp.Spieltag'], null=True)),
        ))
        db.send_create_signal('BuLiTippApp', ['Kommentar'])

        # Adding model 'Meistertipp'
        db.create_table('BuLiTippApp_meistertipp', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('datum', self.gf('django.db.models.fields.DateTimeField')(auto_now=True, blank=True)),
            ('user', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['auth.User'])),
            ('mannschaft', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['BuLiTippApp.Verein'])),
            ('spielzeit', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['BuLiTippApp.Spielzeit'])),
        ))
        db.send_create_signal('BuLiTippApp', ['Meistertipp'])

        # Adding unique constraint on 'Meistertipp', fields ['user', 'spielzeit']
        db.create_unique('BuLiTippApp_meistertipp', ['user_id', 'spielzeit_id'])

        # Adding model 'Herbstmeistertipp'
        db.create_table('BuLiTippApp_herbstmeistertipp', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('datum', self.gf('django.db.models.fields.DateTimeField')(auto_now=True, blank=True)),
            ('user', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['auth.User'])),
            ('mannschaft', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['BuLiTippApp.Verein'])),
            ('spielzeit', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['BuLiTippApp.Spielzeit'])),
        ))
        db.send_create_signal('BuLiTippApp', ['Herbstmeistertipp'])

        # Adding unique constraint on 'Herbstmeistertipp', fields ['user', 'spielzeit']
        db.create_unique('BuLiTippApp_herbstmeistertipp', ['user_id', 'spielzeit_id'])

        # Adding model 'Absteiger'
        db.create_table('BuLiTippApp_absteiger', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('datum', self.gf('django.db.models.fields.DateTimeField')(auto_now=True, blank=True)),
            ('user', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['auth.User'])),
            ('mannschaft', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['BuLiTippApp.Verein'])),
            ('spielzeit', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['BuLiTippApp.Spielzeit'])),
        ))
        db.send_create_signal('BuLiTippApp', ['Absteiger'])

        # Adding unique constraint on 'Absteiger', fields ['user', 'spielzeit', 'mannschaft']
        db.create_unique('BuLiTippApp_absteiger', ['user_id', 'spielzeit_id', 'mannschaft_id'])

        # Adding model 'Tabelle'
        db.create_table('BuLiTippApp_tabelle', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('spielzeit', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['BuLiTippApp.Spielzeit'])),
            ('platz', self.gf('django.db.models.fields.IntegerField')()),
            ('mannschaft', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['BuLiTippApp.Verein'])),
            ('punkte', self.gf('django.db.models.fields.IntegerField')()),
        ))
        db.send_create_signal('BuLiTippApp', ['Tabelle'])


    def backwards(self, orm):
        # Removing unique constraint on 'Absteiger', fields ['user', 'spielzeit', 'mannschaft']
        db.delete_unique('BuLiTippApp_absteiger', ['user_id', 'spielzeit_id', 'mannschaft_id'])

        # Removing unique constraint on 'Herbstmeistertipp', fields ['user', 'spielzeit']
        db.delete_unique('BuLiTippApp_herbstmeistertipp', ['user_id', 'spielzeit_id'])

        # Removing unique constraint on 'Meistertipp', fields ['user', 'spielzeit']
        db.delete_unique('BuLiTippApp_meistertipp', ['user_id', 'spielzeit_id'])

        # Deleting model 'News'
        db.delete_table('BuLiTippApp_news')

        # Deleting model 'Spielzeit'
        db.delete_table('BuLiTippApp_spielzeit')

        # Deleting model 'Spieltag'
        db.delete_table('BuLiTippApp_spieltag')

        # Deleting model 'Verein'
        db.delete_table('BuLiTippApp_verein')

        # Deleting model 'Spiel'
        db.delete_table('BuLiTippApp_spiel')

        # Deleting model 'Tipp'
        db.delete_table('BuLiTippApp_tipp')

        # Deleting model 'Kommentar'
        db.delete_table('BuLiTippApp_kommentar')

        # Deleting model 'Meistertipp'
        db.delete_table('BuLiTippApp_meistertipp')

        # Deleting model 'Herbstmeistertipp'
        db.delete_table('BuLiTippApp_herbstmeistertipp')

        # Deleting model 'Absteiger'
        db.delete_table('BuLiTippApp_absteiger')

        # Deleting model 'Tabelle'
        db.delete_table('BuLiTippApp_tabelle')


    models = {
        'BuLiTippApp.absteiger': {
            'Meta': {'unique_together': "(('user', 'spielzeit', 'mannschaft'),)", 'object_name': 'Absteiger'},
            'datum': ('django.db.models.fields.DateTimeField', [], {'auto_now': 'True', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'mannschaft': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['BuLiTippApp.Verein']"}),
            'spielzeit': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['BuLiTippApp.Spielzeit']"}),
            'user': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['auth.User']"})
        },
        'BuLiTippApp.herbstmeistertipp': {
            'Meta': {'unique_together': "(('user', 'spielzeit'),)", 'object_name': 'Herbstmeistertipp'},
            'datum': ('django.db.models.fields.DateTimeField', [], {'auto_now': 'True', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'mannschaft': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['BuLiTippApp.Verein']"}),
            'spielzeit': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['BuLiTippApp.Spielzeit']"}),
            'user': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['auth.User']"})
        },
        'BuLiTippApp.kommentar': {
            'Meta': {'object_name': 'Kommentar'},
            'datum': ('django.db.models.fields.DateTimeField', [], {}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'reply_to': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['BuLiTippApp.Kommentar']", 'null': 'True'}),
            'spieltag': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['BuLiTippApp.Spieltag']", 'null': 'True'}),
            'text': ('django.db.models.fields.CharField', [], {'max_length': '500'}),
            'user': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['auth.User']"})
        },
        'BuLiTippApp.meistertipp': {
            'Meta': {'unique_together': "(('user', 'spielzeit'),)", 'object_name': 'Meistertipp'},
            'datum': ('django.db.models.fields.DateTimeField', [], {'auto_now': 'True', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'mannschaft': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['BuLiTippApp.Verein']"}),
            'spielzeit': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['BuLiTippApp.Spielzeit']"}),
            'user': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['auth.User']"})
        },
        'BuLiTippApp.news': {
            'Meta': {'object_name': 'News'},
            'author': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['auth.User']"}),
            'datum': ('django.db.models.fields.DateTimeField', [], {}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'text': ('django.db.models.fields.CharField', [], {'max_length': '1000'})
        },
        'BuLiTippApp.spiel': {
            'Meta': {'object_name': 'Spiel'},
            'auswaertsmannschaft': ('django.db.models.fields.related.ForeignKey', [], {'related_name': "'auswaertsmannschaft'", 'to': "orm['BuLiTippApp.Verein']"}),
            'datum': ('django.db.models.fields.DateTimeField', [], {'null': 'True'}),
            'ergebniss': ('django.db.models.fields.CharField', [], {'max_length': '5'}),
            'heimmannschaft': ('django.db.models.fields.related.ForeignKey', [], {'related_name': "'heimmannschaft'", 'to': "orm['BuLiTippApp.Verein']"}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'spieltag': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['BuLiTippApp.Spieltag']"})
        },
        'BuLiTippApp.spieltag': {
            'Meta': {'object_name': 'Spieltag'},
            'datum': ('django.db.models.fields.DateTimeField', [], {}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'nummer': ('django.db.models.fields.IntegerField', [], {}),
            'spielzeit': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['BuLiTippApp.Spielzeit']"})
        },
        'BuLiTippApp.spielzeit': {
            'Meta': {'object_name': 'Spielzeit'},
            'bezeichner': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'saisontipp_end': ('django.db.models.fields.DateTimeField', [], {'null': 'True'})
        },
        'BuLiTippApp.tabelle': {
            'Meta': {'object_name': 'Tabelle'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'mannschaft': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['BuLiTippApp.Verein']"}),
            'platz': ('django.db.models.fields.IntegerField', [], {}),
            'punkte': ('django.db.models.fields.IntegerField', [], {}),
            'spielzeit': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['BuLiTippApp.Spielzeit']"})
        },
        'BuLiTippApp.tipp': {
            'Meta': {'object_name': 'Tipp'},
            'ergebniss': ('django.db.models.fields.CharField', [], {'max_length': '5'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'spiel': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['BuLiTippApp.Spiel']"}),
            'user': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['auth.User']"})
        },
        'BuLiTippApp.verein': {
            'Meta': {'object_name': 'Verein'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '75'})
        },
        'auth.group': {
            'Meta': {'object_name': 'Group'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '80'}),
            'permissions': ('django.db.models.fields.related.ManyToManyField', [], {'to': "orm['auth.Permission']", 'symmetrical': 'False', 'blank': 'True'})
        },
        'auth.permission': {
            'Meta': {'ordering': "('content_type__app_label', 'content_type__model', 'codename')", 'unique_together': "(('content_type', 'codename'),)", 'object_name': 'Permission'},
            'codename': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'content_type': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['contenttypes.ContentType']"}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '50'})
        },
        'auth.user': {
            'Meta': {'object_name': 'User'},
            'date_joined': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'email': ('django.db.models.fields.EmailField', [], {'max_length': '75', 'blank': 'True'}),
            'first_name': ('django.db.models.fields.CharField', [], {'max_length': '30', 'blank': 'True'}),
            'groups': ('django.db.models.fields.related.ManyToManyField', [], {'to': "orm['auth.Group']", 'symmetrical': 'False', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'is_staff': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'is_superuser': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'last_login': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'last_name': ('django.db.models.fields.CharField', [], {'max_length': '30', 'blank': 'True'}),
            'password': ('django.db.models.fields.CharField', [], {'max_length': '128'}),
            'user_permissions': ('django.db.models.fields.related.ManyToManyField', [], {'to': "orm['auth.Permission']", 'symmetrical': 'False', 'blank': 'True'}),
            'username': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '30'})
        },
        'contenttypes.contenttype': {
            'Meta': {'ordering': "('name',)", 'unique_together': "(('app_label', 'model'),)", 'object_name': 'ContentType', 'db_table': "'django_content_type'"},
            'app_label': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'model': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '100'})
        }
    }

    complete_apps = ['BuLiTippApp']