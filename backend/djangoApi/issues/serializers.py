from rest_framework import serializers
from django.contrib.auth.models import User
from issues.models import Issue, Comment

class IssueSerializer(serializers.ModelSerializer):
    comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Issue
        fields = ['id', 'title', 'body', 'votes', 'comments', 'created']

class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ['id', 'body','issue','created']
     


class IssueWithCommentSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Issue
        fields = ['id', 'title', 'body', 'votes', 'comments','created']
