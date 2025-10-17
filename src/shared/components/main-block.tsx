import { ConceptBlock } from '@/shared/ui';

const MainBlock = () => {
   return (
      <div className="flex flex-col gap-12">
         <section>
            <h2>
               Typescript - язык со статической типизацией, который по умолчанию использует строгую типизацию, но предоставляет ослаблять её когда
               необходимо (например any).
            </h2>
            <div className="grid grid-cols-2 gap-3">
               <ConceptBlock
                  title={{
                     main: 'Динамическая типизация',
                     subtitle: 'Определяется во время выполнения программы (в рантайме), и может меняться в процессе работы',
                  }}
                  codeBlock={{
                     title: 'Пример динамического изменения типа:',
                     code: `let x;          // тип undefined
x = 5;          // теперь тип number
x = "Hello";    // теперь тип string
x = true;       // теперь тип boolean`,
                  }}
               />
               <ConceptBlock
                  title={{
                     main: 'Статическая типизация',
                     subtitle: 'Типы проверяются во время компиляции написании кода, а не во время выполнения программы',
                  }}
                  codeBlock={{
                     title: 'Примеры строгой и ослабленной типизации:',
                     code: `// Строгая типизация (по умолчанию)
let age: number = 25;
age = "30"; // ❌ Ошибка компиляции

// Ослабленная типизация (когда нужно)
let data: any = 25;
data = "30";     // ✅ Разрешено
data = true; // ✅ Разрешено`,
                  }}
               />
            </div>
         </section>
         <section>
            <h2>
               Объединение (union) множеств — это операция, которая создает новое множество, содержащее все элементы из всех исходных множеств без
               повторений.
            </h2>
            <div className="grid grid-cols-2 gap-3">
               <ConceptBlock
                  className="col-span-2"
                  title={{
                     main: 'Объединение (union) множеств',
                     subtitle: 'Операция над двумя исходными множествами, создающая третье результирующее множество, содержащее все элементы из обоих множеств',
                  }}
                  codeBlock={{
                     title: 'Примеры объединения множеств:',
                     code: `// Математика
A = {1, 2, 3}, B = {3, 4, 5}
A ∪ B = {1, 2, 3, 4, 5}

// TypeScript - простые типы
let id: number | string;
id = 123;      // ✅
id = "ABC123"; // ✅

// TypeScript - литеральные типы  
type Status = "success" | "error" | "loading";

// TypeScript - псевдонимы типов
type NumberSet = number;   // Множество 1
type StringSet = string;   // Множество 2
type UnionSet = NumberSet | StringSet; // Множество 3 (результат)

// Визуализация:
NumberSet = {1, 2, 3, 4.5, -10, ...}
StringSet = {"a", "b", "hello", ...}
UnionSet = {1, 2, 3, 4.5, -10, "a", "b", "hello", ...}`,
                  }}
               />
            </div>
         </section>
      </div>
   );
};

export default MainBlock;
