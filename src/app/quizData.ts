export interface quizData{
    id:number;
    question:any;
    description:any;
    answers:[{answer_a:any;
        answer_b:any;
        answer_c:any;
        answer_d:any;
        answer_e:any;
        answer_f:any}];
    multiple_correct_answers:any;
    correct_answers:[{answer_a_correct:any;
        answer_b_correct:any;
        answer_c_correct:any;
        answer_d_correct:any;
        answer_e_correct:any;
        answer_f_correct:any;}];
    correct_answer:any;
    explanation:any;
    tip:any;
tags:[{name:any}];
category:any;
difficulty:any}