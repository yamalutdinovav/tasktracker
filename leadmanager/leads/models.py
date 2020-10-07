from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    name = models.CharField(max_length=100)
    message = models.CharField(max_length=500, blank=True)
    status = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    # assigned_to = models.ForeignKey(
    #     User, related_name="leads", on_delete=models.CASCADE, null=True)
    # deadline = models.DateTimeField(auto_now_add=False, null=True, required=False)
    
