import { IConceptBlock } from '../ui/ConceptBlock';

interface Props {
   title: string;
   codeBlocks: IConceptBlock[];
}

const MainBlockData: Props[] = [
   {
      title: 'Типизация',
      codeBlocks: [
         {
            title: {
               main: 'Динамическая типизация',
               subtitle: 'Определяется во время выполнения программы (в рантайме), и может меняться в процессе работы',
            },
            codeBlock: {
               title: 'Пример динамического изменения типа:',
               code: `let x;          // тип undefined
x = 5;          // теперь тип number
x = "Hello";    // теперь тип string
x = true;       // теперь тип boolean`,
            },
         },
         {
            title: {
               main: 'Статическая типизация',
               subtitle: 'Типы проверяются во время компиляции (сборки), до выполнения программы',
            },
            codeBlock: {
               title: 'Примеры строгой и ослабленной типизации:',
               code: `// Строгая типизация (по умолчанию)
let age: number = 25;
age = "30"; // ❌ Ошибка компиляции

// Ослабленная типизация (когда нужно)
let data: any = 25;
data = "30";     // ✅ Разрешено
data = true; // ✅ Разрешено`,
            },
         },
      ],
   },
   {
      title: 'Типы',
      codeBlocks: [
         {
            title: {
               main: 'Тип',
               subtitle: 'множество (к типам нужно относится как к множествам)',
            },
            codeBlock: {
               title: 'Примеры представления типов как множеств:',
               code: `type StringSet = string;    // Множество строк {"a", "b", "c"}
type NumberSet = number;    // Множество чисел {1, 2, 3}
type BooleanSet = boolean;  // Множество boolean значений true | false`,
            },
         },
      ],
   },
   {
      title: 'Объединение (union)',
      codeBlocks: [
         {
            title: {
               main: 'Объединение (union) | ',
               subtitle: 'это тип, который описывает значения, принадлежащие хотя бы одному из исходных типов',
            },
            codeBlock: {
               title: 'Примеры объединения типов:',
               code: `type MainInfo = {
   firstname: string;
   lastname: string;
};

type AdditionalInfo = {
   age: number;
};

type UserInfo = MainInfo | AdditionalInfo;

const user0: UserInfo = { firstname: '123', lastname: '123' }; // ✅ только MainInfo
const user1: UserInfo = { age: 123 }; // ✅ только AdditionalInfo
const user2: UserInfo = { firstname: '123', lastname: '123', age: 123 }; // ✅ MainInfo И AdditionalInfo
`,
            },
         },
      ],
   },
   {
      title: 'Пересечение (intersection)',
      codeBlocks: [
         {
            title: {
               main: 'Пересечение (intersection) &',
               subtitle: 'это комбинация типов, где объект должен удовлетворять ВСЕМ типам одновременно.',
            },
            codeBlock: {
               title: 'Пример пересечения типов:',
               code: `type MainInfo = {
   firstname: string;
   lastname: string;
};

type AdditionalInfo = {
   age: number;
};

type UserInfo = MainInfo & AdditionalInfo;

const user0: UserInfo = {
   firstname: '123',
   lastname: '123',
   age: 123,
};`,
            },
         },
      ],
   },
   {
      title: 'Надтипы и Подтипы',
      codeBlocks: [
         {
            title: {
               main: 'Отношения надтипов и подтипов',
               subtitle: 'Подтип содержит все свойства надтипа и добавляет новые',
            },
            descr: `
            <p><b>Super Type</b> - надтип</p>
            <p><b>Sub Type</b> - подтип</p>
            <p><b>Подтип</b> считается тот тип у которого есть поля родителя и при этом добавляет свои</p>
            <p><b>Подтип</b> включает все свойства и/или методы надтипа + может добавлять свои</p>
            `,
            codeBlock: {
               title: 'Базовые примеры отношений:',
               code: `type SuperType = {
   name: string;
};

type SubType = {
   name: string;
   age: number;
};

// ✅ Подтип можно присвоить надтипу
// Создаём объект который соответствует SubType и присваиваем переменную "subType" переменной "superType"
const subType: SubType = { name: '123', age: 123 };
const superType: SuperType = subType; // допустимо

Итого:
SubType содержит ВСЕ свойства SuperType (name) + дополнительные (age). 
TypeScript говорит: "У subType точно есть всё, что нужно SuperType (name), поэтому можно присвоить".

// ❌ Надтип нельзя присвоить подтипу
// Создаём объект который соответсвует SuperType и присваиваем переменную "superType2" переменной subType2
const superType2: SuperType = { name: '123' };
const subType2: SubType = superType2; // недопустимо

Итого:
SuperType НЕ содержит свойство age, которое требуется для SubType. 
TypeScript говорит: "Я не могу гарантировать, что у superType2 есть свойство age, поэтому нельзя присвоить".
`,
            },
         },
      ],
   },
   // {
   //    title: '421421421',
   //    codeBlocks: [
   //       {
   //          title: {
   //             main: '412',
   //             subtitle: '412412421',
   //          },
   //          codeBlock: {
   //             title: '412412',
   //             code: `421421421`,
   //          },
   //       },
   //    ],
   // },
];

export default MainBlockData;

// // TypeScript - литеральные типы
// type Status = "success" | "error" | "loading";
