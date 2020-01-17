from django.shortcuts import render

def main(request):
    return render(request,'board/main.html')

def space1(request):
    return render(request,'board/space1.html')

# Create your views here.

