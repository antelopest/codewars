/*
В массиве длины n хранятся записи со следующей информацией об абитуриентах: Ф.И.О. и результаты вступительных экзаменов (количество баллов от 0 до 10 по математике и физике и зачёт или незачёт по русскому языку).
Вывести Ф.И.О. абитуриентов, зачисленных в институт, при плане набора, равном k.

Замечание: зачисляются абитуриенты в порядке невозрастания суммы баллов по математике и физике, при условии, что количество баллов и по математике, и по физике больше четырёх, и есть зачёт пo русскому языку.
*/

class Student {
  constructor(
      fio,
      exams,
      credit
  ) {
    this.fio = fio;
    this.exams = exams;
    this.credit = credit;
  }

  sumExams(exams) {
    let sumExams = 0;
    for (let exam of Object.keys(this.exams)) {
      if (exams.indexOf(exam) !== -1) {
        sumExams += this.exams[exam];
      }
    }

    return sumExams;
  }
}

const students = [
  new Student(
      'Беленко Семен Юрьвич',
      {
        maths: 5,
        physics: 4
      },
      {
        russianLanguage: true
      }
  ),
    new Student(
        'Новинский Вадим Сергеевич',
        {
          maths: 4,
          physics: 4
        },
        {
          russianLanguage: true
        }
    )
];

const sumExams = (arr, exams) => arr.map(e => {
  return {
    fio: e.fio,
    sumExams: e.sumExams(exams),
    credit: e.credit
  };
});

console.log(
    sumExams(students, ['maths', 'physics']).filter(s => s.sumExams > 4 && s.credit.russianLanguage).sort((a, b) => b.sumExams - a.sumExams)
);
