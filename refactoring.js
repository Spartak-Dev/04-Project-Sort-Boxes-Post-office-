//3.Проєкт: "Сортувальник посилок"
//1. Збір даних
const askUserNumberPost = prompt('Який у вас номер посилки?');
//2.Перевірка вхідних даних:
//2.1Перевірка на скасування:

if (askUserNumberPost === null) {
  alert('оерація скасована')
} else if (askUserNumberPost === '') {
  alert('Поле повиненне бути введено')
} else {
    const numberUserNumberPost = Number(askUserNumberPost);
    //2.2Перевірка на число:
   if (isNaN(askUserNumberPost) == true) {
    alert('Помилка: введіть, будь ласка, число.');
  }
  //3.Логіка сортування:
  let conveyorNumber = 0;
  switch (numberUserNumberPost % 3) {
   case 0:
      conveyorNumber = 1;
      break;
   case 1:
      conveyorNumber = 2;
      break
   case 2:
      conveyorNumber = 3;   
      break;
  }
   alert(`Посилку № ${numberUserNumberPost} відправлено на Конвеєр № ${conveyorNumber}`)
}