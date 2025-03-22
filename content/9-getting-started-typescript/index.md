---
emoji: ⌨
title: '쉽게 시작하는 타입스크립트'
date: '2025-01-01'
categories: featured-typescript
---

## Chapter 1. 타입스크립트 소개와 배경

**타입 스크립트의 장점**

- 에러의 사전 방지
- 코드 가이드 및 자동 완성

```javascript
function sum(a: number, b: number) {
  return a + b;
}
var total = sum(10, 20);
total.toFixed(2);
```

vs코드에서 total.까지만 적더라도 자바스크립트 Number타입(반환 타입 추론)에서 사용할 수 있는 _내장 API 정보 제공 및 자동 완성 기능_

타입스크립트를 시작하기 어려운 이유

- 적지 않은 학습 비용
- 운영 중인 서비스 적용에 대한 부담감
  > 대안으로 JSDoc + @ts-check (but, 객체와 배열 더 나아가 복잡한 타입을 다룰 때 작성해야 하는 코드가 많아짐)

## Chapter 7. 타입별칭

### 타입 별칭과 인터페이스의 차이점

- 코드 에디터에서 표기 방식 차이

  - 타입 별칭의 경우 더 상세한 구조를 알 수 있는 미리보기

- 사용할 수 있는 타입의 차이

  - 인터페이스 : 객체의 타입 정의
  - 타입 별칭 : 일반 타입의 이름, 유니언 타입, 인터섹션 타입, 제네릭, 유틸리티 타입 등

  ```javascript
  type ID = string;
  type Product = TShirt | Shoes;
  type Teacher = Person & Adult;
  type Gilbut<T> = {
    book: T,
  };
  type MyBeer = Pick<Beer, "brand">;
  ```

- 타입 확장 관점에서 차이
  - 인터페이스 : 상속(extends) 활용, 선언 병합
  - 타입별칭 : 인터섹션 타입
    > **선언 병합(declaration merging)**: 동일한 이름으로 인터페이스를 선언하면 인터페이스 내용 합치는 특성

### 타입 별칭은 언제 쓰는 것이 좋을까?

**타입 별칭으로만 타입 정의가 가능한 곳에서는 타입 별칭을 사용하고 백엔드와의 인터페이스를 정의하는 곳에서는 인터페이스를 이용하자**

> 인터페이스의 경우, 상속과 선언 확장을 활용하여 타입을 확장하는 관점에서 유리(서비스 요구사항이 변경될 수 있으니!)

## Chpter 8. 이넘

이넘(enum) : 특정 값의 집합을 의미하는 데이터 타입

### 숫자형 이넘

```javascript
enum Direction {
  Up, // 0
  // Up = 10, 이렇게 할당하면 Down부터 11 할당됨
  Down, // 1
  Left, // 2
  Right // 3
}

console.log(Direction.Up);  // 0
console.log(Direction[0]);  // "Up"

// js 컴파일 시
"use strict";
var Direction;
(function (Direction) {
  Direction[Direction["Up"] = 0] = "up";
  // 이후 생략
})(Direction || (Direction = {}));
```

> 이넘의 속성과 값이 거꾸로 연결되어 할당되는 것을 **리버스 매핑**(reverse mapping)

### 문자형 이넘

실무에서는 이넘 값을 숫자로 관리하기보다 문장열로 관리하는 사례가 많음. 속성 이름과 값을 동일한 문자열로 관리하는 것이 일반적인 코딩 규칙
(파스칼 케이스, 대문자, 언더스코어 사용도 가능)

### 알아 두면 좋은 이넘의 특징

- 혼합 이넘(숫자와 문자열 섞어서 선언)

- 다양한 이넘 속성 값 정의 방식(덧셈 연산자 사용하여 계산한 것을 속성 값으로, .length 활용하여 숫자 속성 값)

- const 이넘(컴파일 결과물의 코드양을 줄일 수 있음)
  > const enum 사용시 채워 넣기 기능을 되도록 피해야 하고 제어할 수 프로그램에서만 사용, NPM 배포 or 라이브러리 사용 X => 코드 컴파일 이후 const enum 갱신시 런타임에 같은 열거형이 버전에 따라 다른 값을 가질 수 있음(출처 : 보리스 체르니 - 타입스크립트 프로그래밍)

## Chapter 10. 제네릭

### 제네릭이란?

타입을 미리 정의하지 않고 사용하는 시점에 원하는 타입을 정의해서 쓸 수 있는 문법

### 제네릭 기본 문법

```javascript
// 타입 정의
function getText<T>(text: T): T {
  return text;
}
// 호출
getText < string > "hi";

// 아래와 같이 타입 선언된 것과 같음
function getText(text: string): string {
  return text;
}
```

> 인터페이스에서도 활용 가능

### 왜 제네릭을 사용할까?

- 중복되는 타입 코드의 문제점 해결
- 중복을 피하기 위해 any를 사용하는 문제점 해결

### 제네릭의 타입 제약

- extends를 사용한 타입 제약

  ```javascript
  //타입 정의
  function lengthOnly<T extends { length: number }>(value: T) {
    return value.length;
  }

  // 호출
  lengthOnly('hi');
  lengthOnly([1, 2, 3]);
  lengthOnly({ title: 'abc', length: 123 });

  // 에러
  // lengthOnly(100)
  ```

- keyof를 사용한 타입 제약

  ```javascript
  // keyof 사용
  type DeveloperKeys = keyof { name: string; skill: string; }
  type DeveloperKeys = "name" | "skill"
  // 1, 2 번째 줄 같은 의미
  ```

  ```javascript
  function printKeys<T extends keyof { name: string; skill: string }>(value: t) {
    console.log(value);
  }

  // 에러
  printKeys('address');
  printKeys(100);
  ```

## Chapter 12. 타입추론

### 타입 추론이란?

타입스크립트가 코드를 해석하여 적절한 타입을 정의하는 동작

### 변수의 타입 추론 과정

변수 타입은 선언하는 시점에 할당된 값을 기반으로 추론

### 복잡한 구조에서의 타입 추론 방식

```javascript
interface Dropdown<T> {
  title: string;
  value: T;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  tag: string;
  description: string;
}

let shoppingDetailItem: DetailedDropdown<number>
// number 타입이 K를 타고 T로 전달 value는 number 타입
```

## Chapter 13. 타입단언
### 타입 단언(type assertion)이란?
타입스크립트의 타입 추론에 기대지 않고 개발자가 직접 타입을 명시하여 해당 타입으로 강제하는 것
```javascript
var myName = '세호' as string;

// 이미 운영 중인 서비스의 코드나 누군가가 만들어 놓은 코드라고 한다면 타입 에러를 해결하는 데 변경해야 할 코드가 많아짐 -> 타입 단언을 이용해서 기존 코드 변경 없이 타입 에러 해결
var joo = {} as Person;
joo.name = '형주';
joo.age = 31;
```
> 타입 단언을 이용하면 타입스크립트 컴파일러가 알기 어려운 타입에 대한 힌트 제공, 선언하는 시점에서 속성을 모두 정의하지 않고 추후에 추가할 수 있는 유연함도 가짐

### 타입 단언을 사용할 때 주의할 점
- as 키워드는 구문 오른쪽에서만 사용한다
  - `var num as number = 10;` **불가**
  - `var num = 10 as number;`
  - 당연히 베스트는 `var num : number = 10;`
- 호환되지 않는 데이터 타입으로는 단언할 수 없다
  - `var num = 10 as string` **불가**
- 타입 단언 남용하지 않기
  - 타입 단언은 코드를 실행하는 시점에서 아무런 역할도 하지 않기 때문에 에러에 취약함
  ```javascript
  interface Profile {
    name: string;
    id: string;
  }
  function getProfile() {
    // ...
  }
  var myProfile = getProfile() as Profile;
  renderId(myProfile.id);
  ```
  > 실행 시점에서 myProfile.id에 에러 발생(myProfile 변수가 객체가 아닌데 id 속성에 접근했기 때문)

### null 아님 보장 연산자: !
타입 단언의 한 종류, 값이 null 이 아님을 보장
```javascript
interface Books {
  shuffle: Function
}

function shuffleBooks(books: Books | null) {
  if (books === null || books === undefined) {
    return;
  }
  var result = books.shuffle();
  return result;
}

// null 아님 보장 연산자(!) 사용
function shuffleBooks(books: Books | null) {
  var result = books!.shuffle();
  return result;
}
```
> !로 null 체크 로직 추가하는 수고를 덜 수 있음! **단, 타입 관점에서 null이 아니라고 보장하는 것이지 애플리케이션을 실행할 때 실제로 null 값이 들어오면 실행 에러 발생**

**as나 !를 사용하면 타입 단언이 편리하기는 하지만 실행 시점의 에러는 막아 주지 않기 때문에 가급적 타입 단언보다는 타입 추론에 의지하는 것이 좋음!**

## Chapter 14. 타입가드
### 타입 가드(type guard)란?
여러 개의 타입으로 지정된 값을 특정 위치에서 원하는 타입으로 구분하는 것을 의미

### 왜 타입 가드가 필요할까?

타입 단언으로 타입 에러를 해결하는 경우 두가지 문제점이 생김!
- 실행 시점의 에러는 막을 수 없다.
- 타입 단언을 계속해서 사용해야 한다.

```javascript
functino updateInput(textInput: number | string | boolean) {
  //타입 가드
  if (typeof textInput === 'number'){
    textInput.toFixed(2);
    return;
  }
  if (typeof textInput === 'string') {
    console.log(textInput.length);
    return;
  }
}
```

### 타입 가드 문법
- typeof
- instanceof (클래스 타입이 유니언 타입으로 묶여 있을 때 타입 구분을 위해 사용)
- in (인터페이스 2개가 유니언 타입으로 연결 되어 있을 때 특정 인터페이스로 구분)

### 타입 가드 함수
```javascript
interface Hero {
  name: string;
  nickname: string;
}
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  age: string;
  skill: string;
}
// name으로는 타입 구분 X

// 타입 가드 함수
function isPerson(someon: Hero | Person | Developer) : someone is Person {
  return typeof (someone as Person).age === 'number';
}

// 아래와 같이 사용하면 someone이 Person | Developer로 타입 추런
function greet(someone: Hero | Person | Developer) {
  if ('age' in someone) {
    console.log(someone.age);
  }
}

// 타입 가드 함수 활용
function greet(someone: Hero | Person | Developer) {
  // someone 파라미터가 Person 타입으로 추론
  // age 속성으로 number 관련 내장 API와 내장 속성 접근 가능
  if (isPerson(someone)) {
    console.log(someone.age);
  }
}
```

### 구별된 유니언 타입(discriminated unions), switch문, 연산자 
```javascript
interface Person {
  name: string;
  age: number;
  industry: 'common';
}
interface Developer {
  name: string;
  age: string;
  industry: 'tech';
}

//구별된 유니언 타입
function greet(someone: Person | Developer) {
  if(someone.industry === 'common') {}
  if(someone.industry === 'tech') {}
}

// switch 문
function greet(someone: Person | Developer) {
  switch (someone.industry) {
    case 'common':
      console.log(someone.age.toFixed(2));
      break;
    case 'tech' :
      console.log(someone.age.split(''));
      break;
  }
}

// 논리 비교 연산자
function sayHi(message: string | null) {
  // if 구문 사용
  if (message === null) {
    return;
  }
  if (message.length >= 3) {
    console.log(message);
  }
}

// 혹은 타입 단언 문법 ! 사용
function sayHi(message: string | null) {  
  if (message!.length >= 3) {
    console.log(message);
  }  
}
```

```toc
```