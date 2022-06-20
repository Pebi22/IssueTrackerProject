from django.urls import URLPattern, path
from rest_framework.urlpatterns import format_suffix_patterns
from issues import views

urlpatterns = [
    path('issues/', views.IssueList.as_view()),
    path('issues/<int:pk>/', views.IssueDetail.as_view()),
    path('comments/', views.CommentList.as_view()),
    path('comments/<int:pk>/', views.CommentDetail.as_view()),
    path('issues/<int:pk>/comments/', views.IssueWithComment.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)