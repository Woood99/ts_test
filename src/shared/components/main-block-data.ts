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
      title: 'Объединение (union)',
      codeBlocks: [
         {
            title: {
               main: 'Объединение (union) | ',
               subtitle: 'это тип, который описывает значения, принадлежащие хотя бы одному из исходных типов',
            },
            codeBlock: {
               title: 'Примеры объединения множеств:',
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
