# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding field 'Verein.abk'
        db.add_column('BuLiTippApp_verein', 'abk',
                      self.gf('django.db.models.fields.CharField')(default='', max_length=5),
                      keep_default=False)


    def backwards(self, orm):
        # Deleting field 'Verein.abk'
        db.delete_column('BuLiTippApp_verein', 'abk')


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
            'abk': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '5'}),
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