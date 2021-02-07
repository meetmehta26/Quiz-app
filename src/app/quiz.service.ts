import { Injectable } from '@angular/core';
import {Observable,throwError} from 'rxjs/';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { quizData } from './quizData';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  qns:any;
  seconds:number=0;
  timer;
  qnProgress: number;
  correctAnswerCount: number = 0;
  params:any;
  private _url: string = 'https://quizapi.io/api/v1/questions?apiKey=PytXEci0ytLNcG5hIaGNt41lRsZkAoT0roVzbJs1&category=code&difficulty=Easy&limit=10&tags=JavaScript';
  constructor(private http : HttpClient) { }
  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }
  getQuestions(): Observable<quizData>{
    return this.http.get<quizData>(this._url);
  }
  submitScore() {
    var body = JSON.parse(localStorage.getItem('participant')!);
    body.Score = this.correctAnswerCount;
    body.TimeSpent = this.seconds;
    // return this.http.post(this.rootUrl + "/api/UpdateOutput", body);
  }


}
