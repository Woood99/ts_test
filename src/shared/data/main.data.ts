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
   {
      title: 'Примитивы',
      codeBlocks: [
         {
            codeBlock: {
               title: 'string, number, boolean',
               code: `// string
let name: string = "Иван";
let message: string = 'Привет, мир!';
let template: string = \`Привет, \${name}!\`;

// number - числа (целые, дробные, отрицательные)
let age: number = 25;
let price: number = 99.99;
let temperature: number = -5;

// boolean - логические значения
let isActive: boolean = true;
let isLoading: boolean = false;
let hasPermission: boolean = (age >= 18);
`,
            },
         },
         {
            codeBlock: {
               title: 'undefined, null',
               code: `// undefined - неопределенное значение
let undefinedVar: undefined = undefined;
let emptyValue: undefined;

// null - пустое значение
let nullVar: null = null;`,
            },
         },
         {
            codeBlock: {
               title: 'any, unknown, never, void',
               code: `// any - любой тип (отключает проверку типов)
let dynamicData: any = "текст";
dynamicData = 42;
dynamicData = true;

// unknown - неизвестный тип (безопасный аналог any)
let userInput: unknown = "неизвестные данные";
// userInput.toUpperCase(); // Ошибка - нужно сначала проверить тип
if (typeof userInput === "string") {
   console.log(userInput.toUpperCase()); // ✅ Теперь безопасно
}

// never - значения, которых никогда не бывает
function infiniteLoop(): never {
    while (true) {}
}

const empty: never[] = []; // Нельзя добавить элементы
   
// void - отсутствие значения (для функций)
function logMessage(): void {
   console.log("Сообщение");
   // не возвращает значение
}
`,
            },
         },
         {
            codeBlock: {
               title: 'bigint, symbol',
               code: `// bigint - большие целые числа (окончание n)
let bigNumber: bigint = 9007199254740991n;
let hugeId: bigint = 12345678901234567890n;

// symbol - уникальные идентификаторы
let id1: symbol = Symbol("id");
let id2: symbol = Symbol("id");
console.log(id1 === id2); // false - каждый Symbol уникален
`,
            },
         },
      ],
   },
   {
      title: 'Составные типы',
      codeBlocks: [
         {
            codeBlock: {
               title: 'Комбинация interface и type',
               code: `// Интерфейс для вложенных объектов
interface Address {
   city: string;
   street?: string;          // опциональное свойство
   coords: number[];         // массив чисел
}

// Тип для основного объекта
type User = {
   firstname: string;
   age: number;
   address: Address;         // вложенный интерфейс
   onClick: (value: string) => void; // функция-колбэк
};

// Использование
const user: User = {
   firstname: 'Иван',
   age: 25,
   address: {
      city: 'Москва',
      coords: [55.7558, 37.6173],
   },
   onClick: (value) => {
      console.log(value);
   },
};

// Массив пользователей
const users: User[] = [user];`,
            },
         },
      ],
   },
   {
      title: 'Литеральные типы',
      codeBlocks: [
         {
            codeBlock: {
               title: 'Числовые и строковые литералы',
               code: `// Ограничение допустимых значений
type Rooms = 1 | 2 | 3 | 4 | '5+';

interface IApartmentInfo {
   rooms: Rooms;
   price: number;
   finishing: boolean;
}

const getApartmentInfo = (info: IApartmentInfo): string => {
   return \`Квартира с \${info.rooms} комнатами, стоимостью \${info.price} рублей, \${info.finishing ? 'с отделкой' : 'без отделки'}\`;
};

getApartmentInfo({ rooms: 3, price: 200000, finishing: true });`,
            },
         },
         {
            codeBlock: {
               title: 'const assertions и литералы',
               code: `// Без as const - тип string
const values = {
   color: 'green', // тип string
};

// С as const - тип 'green'
const constValues = {
   color: 'green',
} as const;

type Color = 'red' | 'green' | 'blue';

function paint(color: Color) {}

paint(values.color); // ❌ Ошибка - values.color: string
paint(constValues.color); // ✅ Работает - constValues.color: 'green'`,
            },
         },
      ],
   },
   {
      title: 'Дженерики (Generics)',
      codeBlocks: [
         {
            title: {
               main: 'Дженерик',
               subtitle: 'это как аргумент функции только "тип"',
            },
            codeBlock: {
               title: 'Обобщённые интерфейсы с параметрами по умолчанию',
               code: `interface IMetaData {
   title: string;
}

interface IUser {
   username: string;
}

interface IProduct {
   name: string;
   price: number;
}

// T - тип данных, M - тип метаданных (по умолчанию IMetaData)
interface IApiResponse<T, M = IMetaData> {
   status: 'error' | 'success';
   meta?: M;
   requestId?: string;
   data: T;
}

// ✅ Ответ с пользователем
const userResponse: IApiResponse<IUser> = {
   status: 'success',
   data: {
      username: 'ivan',
   },
};

// ✅ Ответ с продуктом и кастомными метаданными
const productResponse: IApiResponse<IProduct, {timestamp: Date}> = {
   status: 'success',
   meta: {
      timestamp: new Date(),
   },
   data: {
      name: 'Телефон',
      price: 50000,
   },
};

// ✅ Ответ с ошибкой
const errorResponse: IApiResponse<null> = {
   status: 'error',
   data: null,
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
