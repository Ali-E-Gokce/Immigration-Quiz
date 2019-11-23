from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *
from sys import path
import os


def MainPage(request):
    return render(request, "main.html")


def GetQuiz(request):

    return render(request, "quiz2.html")

def GetQuiz1(request):
    return render(request, "quiz1.html")

def GetQuiz2(request):
    return render(request, "quiz2.html")

def ShowResults(request):
    def get_percentage_worse(num_correct):
        worse_repbulicans = QuizLog.objects.filter(political_view = "r", correct_answers__lt = num_correct).count()
        all_republicans = QuizLog.objects.filter(political_view = "r").count()
        worse_democrats = QuizLog.objects.filter(political_view = "l", correct_answers__lt = num_correct).count()
        all_democrats= QuizLog.objects.filter(political_view = "l").count()
        if all_republicans != 0:
            republicans_who_did_worse = worse_repbulicans / all_republicans
        else:
            republicans_who_did_worse = 0
        if all_democrats != 0:
            democrats_who_did_worse = worse_democrats / all_democrats
        else:
            democrats_who_did_worse = 0
        return round(republicans_who_did_worse*100), round(democrats_who_did_worse*100)

    if request.GET:
        #r for right-leaning l for left-leaning
        poltical_view = request.GET["politicalView"][0].lower()
        num_correct = int(request.GET["numCorrect"])
        quiz_id = int(request.GET["quizId"])
        log = QuizLog(political_view = poltical_view, correct_answers = num_correct, quiz_id = quiz_id)
        log.save()
        worse_right, worse_left = get_percentage_worse(num_correct)
    return JsonResponse({"worseRight": worse_right, "worseLeft": worse_left})
