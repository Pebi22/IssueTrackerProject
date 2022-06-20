from rest_framework import generics
from issues import serializers
from issues.models import Issue, Comment

class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = serializers.CommentSerializer

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = serializers.CommentSerializer

class IssueList(generics.ListCreateAPIView):
    queryset = Issue.objects.all()
    serializer_class = serializers.IssueSerializer
  

class IssueDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Issue.objects.all()
    serializer_class = serializers.IssueSerializer

class IssueWithComment(generics.RetrieveUpdateDestroyAPIView):
   
    queryset = Issue.objects.all()
    serializer_class = serializers.IssueWithCommentSerializer




