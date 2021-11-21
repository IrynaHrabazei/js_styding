// <!--        template 1.1-->
// <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//     інші об'єкти масиву
//   ...
//   ...
//   ...
//     -->
// </ul>
//
// <!---------------------------------------------->

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону template1.1
// */

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>')
for (const item of listOfItems){
    document.write(`<li>${item}</li>`);
}
document.write('</ul>')