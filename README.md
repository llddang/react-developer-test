# React Developer Test

## 💬 프로젝트 소개
> 📅 개발 기간 : 2025. 02.20 ~ 2025. 02. 25 (총 6일) <br/>
> 🔗 배포 주소 : [https://react-developer-test-five.vercel.app](https://react-developer-test-five.vercel.app) <br/>
> 
> 자신의 개발자 유형을 알아볼 수 있는 React 기반의 웹 어플리케이션입니다. <br/>
>
> **TailwindCSSs**를 통한 컴포넌트를 스타일링하고, **Zustand**를 활용하여 클라이언트 상태 관리를 합니다. <br/>
> **TanstackQuery**를 통하여 서버 상태 관리를 하고, **react-router-dom**을 활용하여 페이지 간 네비게이션을 처리합니다. <br/>
>
> 이 프로젝트를 통해 axios의 인터셉트 활용 및 토큰 인증/인가에 대해 학습했습니다. <br/>
>
> PC와 모바일 환경 모두에 최적화된 반응형 디자인을 적용하였습니다.

<br/>
<br/>

## 📑 페이지 구성
<table width="100%">
  <tr>
    <th style="text-align:center" width="25%"><b>1. 회원가입</b></th>
    <th style="text-align:center" width="25%"><b>2. 로그인</b></th>
    <th style="text-align:center" width="25%"><b>3. 메인 홈</b></th>
    <th style="text-align:center" width="25%"><b>4. 프로필 수정</b></th>
  </tr>
  <tr>
    <td style="text-align:center"><img src="https://github.com/user-attachments/assets/8e48147a-4b71-46e9-a849-eebc97adaba1" alt="회원가입" /></td>
    <td style="text-align:center"><img src="https://github.com/user-attachments/assets/5cb2bbcb-4ff9-4faa-af6b-5d826073588c" alt="로그인" /></td>
    <td style="text-align:center"><img src="https://github.com/user-attachments/assets/f7ad2dfa-28f1-4a69-bbd6-5fe27fecc79b" alt="메인 홈" /></td>
    <td style="text-align:center"><img src="https://github.com/user-attachments/assets/df6b4a85-a259-4f90-9550-b699448bd466" alt="프로필 수정" /></td>
  </tr>
  <tr>
    <th style="text-align:center"><b>5. 개발자 유형 테스트</b></th>
    <th style="text-align:center"><b>6. 테스트 결과</b></th>
    <th style="text-align:center"><b>7. 테스트 결과 목록</b></th>
    <th style="text-align:center"><b>8. 카카오톡 공유하기</b></th>
  </tr>
  <tr>
    <td style="text-align:center"><img src="https://github.com/user-attachments/assets/3587344a-5a2b-4a44-a970-bc5e153dc92f" alt="개발자 유형 테스트" /></td>
    <td style="text-align:center"><img src="https://github.com/user-attachments/assets/dfd291d6-743e-4cce-b542-0c0416fa60fe" alt="테스트 결과" /></td>
    <td style="text-align:center"><img src="https://github.com/user-attachments/assets/0af82acc-08ba-430d-8749-672e70dab814" alt="테스트 결과 목록" /></td>
    <td style="text-align:center"><img src="https://github.com/user-attachments/assets/aa32f75a-2081-4b03-8eb6-df7bde45149f" alt="카카오톡 공유" /></td>
  </tr>
</table>
<br/>
<br/>

## ⚙ 프로젝트 기능 소개
- **React 라이브러리**로 구성된 프로젝트입니다.
- **Zustand**를 사용하여 애플리케이션의 유저 정보 상태를 관리합니다.
- **TanStack Query**의 prefetch 및 useSuspenseQuery, useSusepnseInfiniteQuery를 이용하여 **suspense를 통한 loading**과 **무한스크롤**을 구현하였습니다.
- **Axios Instance**를 활용하여 API 통신을 모듈화하고, **요청/응답 인터셉터**를 통해 공통적인 처리 로직을 적용합니다.
- **TailwindCSS**를 사용하여 반응형 디자인을 적용하고, **react-router-dom**을 이용해 페이지 간 네비게이션을 처리합니다.
- 로그인된 유저의 인증 상태에 따라 **ProtectedRoute**를 적용하여 비인가 사용자의 접근을 제한합니다.
- **카카오톡 공유하기** 기능을 활용해 자신의 개발자 유형 검사 결과를 소셜에 공유할 수 있습니다.

<br/>
<br/>

## 프로젝트 실행
```sh
# server-json 설정
git clone https://github.com/llddang/json-server-developer-test.git
cd json-server-developer-test
pnpm install
pnpm start & # unix/linux/mac 에서 background로 실행 (http://localhost:4000)
cd ..

# frontend project 실행
git clone https://github.com/llddang/react-developer-test.git
cd react-developer-test
cat > .env.development << EOL
VITE_APP_AUTH_API_URL=https://www.nbcamp-react-auth.link
VITE_APP_JSON_API_URL=http://localhost:4000
VITE_APP_KAKAO_KEY='KAKAO_KEY' # kakao에서 발행한 key를 넣어주세요.
EOL
pnpm i
pnpm dev & # unix/linux/mac 에서 background로 실행 (http://localhost:5173/)
```

<br/>
<br/>

## 🚀 트러블 슈팅
#### [json-server에서 관계형 데이터베이스 구축 및 사용 방법](https://llddang-blog.tistory.com/78)

<br/>
<br/>

## 📁 프로젝트 구조

```markdown
📦 react-developer-test
├─ public
└─ src
   ├─ main.tsx
   ├─ App.tsx
   ├─ components
   │  ├─ commons
   │  ├─ features
   │  └─ layouts
   ├─ config
   │  ├─ ProtectedRoute.tsx
   │  └─ Router.tsx
   ├─ constants
   │  ├─ env.constant.ts
   │  └─ query-key.constant.ts
   ├─ data
   │  ├─ developer-type.data.ts
   │  └─ questions.data.ts
   ├─ libs
   │  ├─ api
   │  ├─ hooks
   │  └─ utils
   ├─ pages
   ├─ stores
   ├─ styles
   └─ types
```

<br/>
<br/>

## 🕶️ 기술 스택
#### **Deploy** <br/>
 &emsp; <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>

#### **Frontend** <br/>
 &emsp; <img src="https://img.shields.io/badge/React_18.3.1-087ea4?style=for-the-badge&logo=React&logoColor=white" alt="React"/> <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&amp;logo=Tailwind CSS&amp;logoColor=white">

<br/>
<br/>
