
<h1> Greenie Web Page </h1>
Vercel 배포 주소: : https://greenie-web.vercel.app/?${queryString} [분석결과] <br>
&nbsp&nbsp&nbsp 　　　　　　　 ㄴ   https://greenie-web.vercel.app/solution [층간소음줄이기] <br>
		　　　　　　　　　　                    https://greenie-web.vercel.app/complaint_apply [상담신청] <br>
	    　　　　　　　　　　                	 https://greenie-web.vercel.app/product [소음줄이기 상품] <br/>
       　　　　　　　　　　             		 https://greenie-web.vercel.app/mental_hearing_health [건강챙기기]


빌드 명령어:
   <pre>
<code>
 npm run build
 npx vercel
</code>
</pre>



## React 동작 방식 (CSR)
<p> 유저와 서버, 브라우저 각각의 입장을 나눠서 생각하면 이해하기가 쉽습니다. 브라우저는 유저와 앱의 연결 통로 역할을 합니다.
<br/>
유저가 브라우저를 통해 앱에 접속합니다.</br>
앱은 브라우저에게 JavaScript 정보가 들어있는 빈 HTML 문서를 전달합니다. 즉, 브라우저에게 JavaScript 파일을 전달하는 것으로 볼 수 있습니다.</br>
브라우저는 JavaScript 파일을 다운로드하고 동시에 유저는 빈 화면을 보게 됩니다(접속에 대한 응답).
브라우저에서 JavaScript 파일의 다운로드가 끝나면, 리액트 코드가 있는 JavaScript 파일을 실행합니다.
브라우저에 있는 리액트 코드가 UI를 렌더링합니다(동적으로 렌더링).
유저는 드디어 앱이 보여주고자 했던 화면을 보게 됩니다.
즉, 브라우저가 JavaScript 코드를 가지고 있지 않거나 요청 중인 상태라면 UI를 구성할 수 없고, 유저는 빈 화면을 보게 됩니다. 이렇게 클라이언트 측에서 UI를 빌드하는 것을 CSR(클라이언트 사이드 렌더링) 방식이라고 합니다.</p>

<br/>
<h4> 👍 장점 </h4>
<span>  -  초기 로드만 완료되면 이후 렌더링이 빠르다. </span> </br>
<span>  -  서버에 요청할 것이 거의 없어 서버 부담이 적다. (data 필요할 때만 요청) </span></br>
<span>  -  Web Applications에 좋다 </span></br>
</br>

## Stacks 🐈 
### Environment:
[![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-%23007ACC?logo=visual-studio-code&logoColor=white&style=flat-square)](https://code.visualstudio.com/)
[![Git](https://img.shields.io/badge/Git-%23F05032?logo=git&logoColor=white&style=flat-square)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-%23121011?logo=github&logoColor=white&style=flat-square)](https://github.com/)


### Config:

[![npm](https://img.shields.io/badge/-npm-CB3837?style=flat&logo=npm&logoColor=white)](#)
### Development:
[![JavaScript](https://img.shields.io/badge/-JavaScript-yellow?style=flat&logo=javascript&logoColor=white)](#)
[![React](https://img.shields.io/badge/-React-blue?style=flat&logo=react&logoColor=white)](#)

### Communication:
[![Slack](https://img.shields.io/badge/-Slack-purple?style=flat&logo=slack&logoColor=white)](#)
[![Notion](https://img.shields.io/badge/-Notion-black?style=flat&logo=notion&logoColor=white)](#)
[![Google Meet](https://img.shields.io/badge/-Google_Meet-red?style=flat&logo=googlemeet&logoColor=white)](#)


## 주요 기능
<h4> ⭐️ 소음분석 데이터 분석 결과 보기 </h4>
-안드로이드에서 보내는 데이터 쿼리를 URL 파라미터로 받아옵니다.</br>
-해당 소음원들을 퍼센트 기준 상위권 3개로 정렬하고, 나머지는 "기타"로 분류합니다. </br>
-axios POST를 통해 서버에 데이터를 보관하고 요청 처리에 용이합니다. </br>
-chart.js 라이브러리를 사용하여 도넛 형태의 그래프를 그립니다. </br>
  그래프의 옵션과 데이터를 설정하고, 커스텀 플러그인을 사용하여 이미지와 텍스트를 그립니다.
  
  <br/>
  
<h4> ⭐️ 소음 줄이기 페이지 이동 </h4>
가장 상위인 소음원이 속하는 카테고리(층간소음/가전가구/반려동물/음악/기타) 탭의 줄이기 방안 컨텐츠 페이지로 이동합니다.

<br/>
<h4> ⭐️ 건강챙기기 </h4>
해당 컨텐츠 더 보기로 이동합니다.

<br /> 
<h4> ⭐️ 상품 추천 </h4>
가장 상위인 소음원과 관련된 상품을 랜덤으로 2개 미리 볼 수 있습니다(해시태그 기준 이름과 매칭된 상품만 필터링).</br>
전체 제품 더 보기 버튼으로 이동합니다.</br>
상품 조회 데이터는 API 호출(axios)을 통해 연결합니다.

</br>

#### ⭐️ 공유하기
해당 분석 결과를 카카오톡 공유 및 URL 복사 기능을 제공합니다.</br>
[분석 날짜 파일 제목] 평균 dB / 최고 소음원으로 제목을 구성합니다.



## 아키텍처

### 디렉토리구조

<pre>
└──  : Front-end
    ├── README.md
    ├── vercel.json
    ├── components
    │   ├── CS	:상담하기
    │   │   ├── ArbitraintRequest.js   
    │   │   ├── Consult.js
    │   │   ├── CSBoard.js / module.css
    │   │   ├── CSManager.js
    │   ├──HealthList :건강챙기기
    │   │   ├── CardAlbum.js / module.css
    │   │   ├── CardNewsList.js / css
    │   │   ├── HealthPanel.js
    │   ├── ProductRecommend :소음줄이기 제품 추천
    │   │   ├── StoreItem.js / module.css
    │   │   ├── StoreList.js / module.css
    │   │   ├── StorePanel.js
    │   ├── ResourcesResult :소음결과분석 페이지
    │   │   ├──DbMention.js :평균 데시벨에 따른 조건부 멘트 
    │   │   ├── GraphPanel 
    │   │   ├── ResourceItem.js
    │   │   ├── ResourcesList.js
    │   │   ├── ResourcesPanel.js
    │   └── Solution : 층간소음 줄이기 
    │   │   ├── SolutionListPanel 부제목 컨텐츠 컴포넌트
    │   │   │   ├── Etc.js
    │   │   │   ├── HomeAppliances.js
    │   │   │   ├── Music.js
    │   │   │   ├── Pets.js
    │   │   │   ├── ShockAbsorber.js
    │   │   ├── CommunicateTitle.js
    │   │   ├── ConnectWithNeighbours.js :이웃과 소통하기 탭
    │   │   ├── ConsierateNeighbours.js : 이웃을 배려하기 탭
    │   │   ├── SolutionCard.js
    │   │   ├── tabs.js  :부제목 탭
    │   │   └── TagTemplate.js
    │   ├── SvgPaths.js : 소음원 이름,아이콘(이미지),color resource. 공통으로 전체 페이지에 포함됨.
    │   ├── Header.js
    │   └── Footer.js
    ├── index.js   
    ├── App.js
    ├── package-lock.json
    ├── package.json
    ├── pages
    │   ├── complaint_apply.js
    │   ├── mental_hearing_health.js
    │   ├── noise_analysis_results.js
    │   ├── product.js
    │   ├── reduce_noise_floors_main.js
    │   └── reduce_noise_floors.js
    ├── images
    ├── UI : 공통으로 사용되는 UI
    │   ├── Banner.js / css
    │   ├── Bar.js / css
    │   ├── Button.js / css 
    │   ├── Card.js / css
    │   ├── CircleIcon.js / css
    │   ├── Graph.js / css
    │   ├── Panel.js / css
    │   ├── ReduceCard.js / css
    │   ├── ShareModal.js / css
    │   └── Tab.js
    └── reducers
        └── reducer.js    : Graph imageURL state
</pre>




