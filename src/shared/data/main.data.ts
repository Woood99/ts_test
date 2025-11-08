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
   {
      title: 'Ограничения дженериков (extends)',
      codeBlocks: [
         {
            title: {
               main: 'extends',
               subtitle: 'наследование всех полей + добавление своих',
            },
            codeBlock: {
               title: 'Гарантии типов с extends',
               code: `type MainInfo = {
   firstname: string;
   lastname: string;
};

type AdditionalInfo = {
   age: number;
};

interface UserInfo0 extends MainInfo {
   age: number;
}

interface UserInfo1 extends MainInfo, AdditionalInfo {}

const test0: UserInfo0 = { firstname: '123', lastname: '123', age: 123 };
const test1: UserInfo1 = { firstname: '123', lastname: '123', age: 123 };
`,
            },
         },
         {
            descr: `
           <p>extends устанавливает МИНИМАЛЬНЫЕ требования к типу</p>
           <p>Объект может иметь БОЛЬШЕ свойств, но не МЕНЬШЕ</p>
            `,
            codeBlock: {
               title: 'Гарантии типов с extends',
               code: `// extends = "должен содержать как минимум"

interface FieldValidation {
   isValid: boolean;
}

// T extends Record<string, FieldValidation> означает:
// "T должен быть объектом, где КАЖДОЕ значение содержит как минимум isValid: boolean"
function validateForm<T extends Record<string, FieldValidation>>(formData: T): void {
   for (const fieldName in formData) {
      const field = formData[fieldName];
      
      field.isValid; // ✅
      
      // ❌ НЕ гарантировано
      if ('warning' in field) {
         console.log(field.warning);
      }
   }
}

// ✅
validateForm({
   email: { isValid: true },                    // только обязательное поле
   password: { isValid: false },                // только обязательное поле
   age: { isValid: true, warning: 'Младше 18' } // обязательное + дополнительное
});

// ❌
// validateForm({
//    email: { value: 'test' }
// });


// ==================================================

interface ConfigBase {
   enabled: boolean;
   name: string;
}
   
function validateConfig<T extends ConfigBase>(config: T): void {
   // ✅ Гарантировано: config.enabled и config.name
   if (config.enabled) {
      console.log('Config:', config.name);
   }
   
   if ('timeout' in config && typeof config.timeout === 'number') {
      console.log('Timeout:', config.timeout);
   }
}
`,
            },
         },
      ],
   },
   {
      title: 'Условные типы (Conditional Types)',
      codeBlocks: [
         {
            codeBlock: {
               title: 'Проверка типов через тернарный оператор',
               code: `// 1. Проверка на массив
type isArray<T> = T extends any[] ? true : false;

const a: isArray<number> = false;        // ✅
const b: isArray<string[]> = true;       // ✅

// 2. Проверка на примитив
type IsPrimitive<T> = T extends string | number | boolean ? true : false;

const p1: IsPrimitive<string> = true;    // ✅
const p2: IsPrimitive<number> = true;    // ✅  
const p3: IsPrimitive<number[]> = false; // ✅

// 3. Проверка на соответствие интерфейсу
type User = {
   username: string;
};

type randomType<T> = T extends User ? { value: number } : { value: string };

const a: randomType<number> = { value: 'fas' };                      // ✅ { value: string }
const b: randomType<{ fasfas: string }> = { value: 'fas' };          // ✅ { value: string }
const c: randomType<{ username: string }> = { value: 412 };          // ✅ { value: number }
const d: randomType<{ username: string; age: 23 }> = { value: 412 }; // ✅ { value: number }`,
            },
         },
      ],
   },
   {
      title: 'Сужение типов (Type Narrowing)',
      codeBlocks: [
         {
            codeBlock: {
               title: 'Практические примеры сужения типов',
               code: `// 1. Сужение примитивов с typeof
type IAge = number | string;

function processAge(age: IAge): void {
   if (typeof age === 'number') {
      // методы number
   }
   if (typeof age === 'string') {
      // методы string
   }
}


// 2. Сужение объектов с оператором in
interface IUser {
   username: string;
   age: IAge;
}

interface IPerson {
   username: string;
}

function processPerson(person: IUser | IPerson): void {
   if ('age' in person) {
      // IUser
   }
   if ('username' in person) {
      //  IUser | IPerson
   }
}


// 3. Сужение с дискриминантными свойствами (discriminated unions)
interface IBaseCar {
   maxSpeed: number;
   weight: number;
}

interface IBmw extends IBaseCar {
   type: 'bmw';
   bmwField: string;
}

interface IAudi extends IBaseCar {
   type: 'audi'; 
   audiField: string;
}

type ICar = IBmw | IAudi;

function driveCar(car: ICar): void {
   switch (car.type) {
      case 'bmw':
         // IBmw тип с car.bmwField
         break;
      case 'audi':
         // IAudi тип с car.audiField
         break;
   }
}`,
            },
         },
         {
            codeBlock: {
               title: 'Создание собственных type guard (пользовательские type guard функции)',
               code: `interface ICar {
   maxSpeed: number;
   width: number;
}

interface IPerson {
   name: string;
   age: number;
}

interface IBmw extends ICar {
   type: 'bmw';
}

interface IAudi extends ICar {
   type: 'audi';
}

// Если функция возвращает true, TypeScript должен считать параметр указанным типом
function isCar(value: ICar | IPerson): value is ICar {
   return 'maxSpeed' in value && 'width' in value;
}

function isPerson(value: ICar | IPerson): value is IPerson {
   return 'name' in value && 'age' in value;
}

function isBmw(value: IBmw | IAudi): value is IBmw {
   return value.type === 'bmw';
}

function isAudi(value: IBmw | IAudi): value is IAudi {
   return value.type === 'audi';
}

// Использование в функциях
function processData(data: ICar | IPerson) {
   if (isCar(data)) {
      // ICar
   }
   if (isPerson(data)) {
      // IPerson
   }
}

function processCar(car: IBmw | IAudi) {
   if (isBmw(car)) {
      // IBmw
   }
   if (isAudi(car)) {
      // IAudi
   }
}`,
            },
         },
      ],
   },
   {
      title: 'Type Assertions (as)',
      codeBlocks: [
         {
            codeBlock: {
               title: 'Утверждение типов - когда мы знаем тип лучше TypeScript',
               code: `// 1. Работа с DOM - TypeScript не знает точный тип элемента
const input = document.getElementById("email") as HTMLInputElement;
const div = document.getElementById("wrapper") as HTMLDivElement;

input.value = "test@test.com"; // ✅ Теперь TypeScript знает методы input
div.innerHTML = "content";     // ✅ Теперь TypeScript знает методы div

// 2. const assertions - фиксация литеральных типов
const colors = ["red", "green", "blue"] as const; 
// Тип: readonly ["red", "green", "blue"] вместо string[]

// 3. Приведение JSON данных к интерфейсу
interface IPerson {
   name: string;
   age: number;
}
const user = JSON.parse('{"name":"John", "age": 30}') as IPerson;
user.name; // ✅ TypeScript знает структуру IPerson`,
            },
         },
         {
            codeBlock: {
               title: 'instanceof - проверка типа в runtime',
               code: `// 1. Проверка DOM элементов (самый частый случай)
function handleElement(element: Element) {
   if (element instanceof HTMLInputElement) {
      element.value = "значение";     // ✅ Методы input
      element.focus();
   } else if (element instanceof HTMLButtonElement) {
      element.disabled = true;        // ✅ Методы button
   }
}`,
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
