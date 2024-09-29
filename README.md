<div align="center">
<h1>👚 당신을 위한 맞춤 패션 컨설팅, FITTING PAIR ✨</h1>
오프라인 매장에서 실시간으로 자신의 체형을 분석해<br>체형에 맞는 패션을 추천 받을 수 있는 패션 컨설팅 키오스크
</div>
<br/><br/>

<div align="center">
<h3>🔽FITTING PAIR 바로 가기🔽</h3>
https://fitting-pair.vercel.app
</div>

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFitting-Pair%2FFrontEnd&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

![image](https://github.com/user-attachments/assets/4b25af4a-48f1-4a39-bd18-aa428416dbb3)

<br/><br/>

## 체형 측정 과정
### 1. OpenPose: 2D 이미지에서 사람의 관절 포인트 추출
  - 사용자로부터 2D 이미지를 입력 받는다.
  - OpenPose가 이미지 속 인물의 관절 포인트를 추출하여 JSON 데이터로 반환한다.
  - JSON 데이터를 이용해 3D 모델링을 한다.
  - https://github.com/CMU-Perceptual-Computing-Lab/openpose
<br>

### 2. SMPLify-X: 2D 포인트 데이터를 3D SMPLX 모델로 변환
  - OpenPose에서 추출한 2D 관절 좌표 데이터를 SMPLify-X에 입력한다.
  - SMPLify-X는 이를 기반으로 3D 신체 모델(SMPLX)을 생성한다.
  - 생성된 3D 모델은 사용자의 체형을 더욱 정교하게 분석할 수 있도록 돕는 역할을 수행한다.
  - https://github.com/vchoutas/smplify-x
<br>

### 3. SMPL-Anthropometry: 3D 모델을 바탕으로 체형 사이즈 분석
  - SMPLify-X에서 생성된 3D SMPLX 모델을 입력한다.
  - SMPL-Anthropometry는 이 모델을 분석하여 사용자의 체형 사이즈(신체 길이, 비율 등)를 계산한다.
  - 최종적으로 사용자의 신체 측정 정보를 제공하여 맞춤형 패션 추천, 의료 및 피트니스 분석 등에 활용 가능하다.
  - https://github.com/DavidBoja/SMPL-Anthropometry
<br>

### 4. 체형 분석 비율: 사용자 체형 사이즈 기반으로 체형을 나눔
  - 입력: 사용자 체형이 측정 된 어깨, 허리, 엉덩이 사이즈의 둘레 값
  - 출력: 사용자의 체형 비율과 성별에 맞는 체형 출력
 
<div align="center">
<h4>남자</h4>

|삼각형 | 역삼각형 | 타원형 | 사각형 | 사다리꼴형 | 
| :---: | :---: | :---: | :---: | :---: |
|1:0.903:1.258|1:0.571:0.592|1:1.227:0.932|1:0.744:0.846|1:0.705:0.773|
</div>

<div align="center">
<h4>여자</h4>

|삼각형 | 역삼각형 | 타원형 | 사각형 | 모래시계형 | 
| :---: | :---: | :---: | :---: | :---: |
|1:0.645:1.258|1:0.512:0.756|1:1.094:1.156|1:1.067:1.033|1:0.463:0.805|
</div>
<br/><br/>

## 🖥️ Developers
<div align="center">

|FE | FE | FE | BE | BE | 
| :---: | :---: | :---: | :---: | :---: |
|![image](https://github.com/user-attachments/assets/f9c64ee7-e6de-49ad-a19a-78279b5ca15e)|![image](https://github.com/user-attachments/assets/252ca103-5b9b-4988-b2e7-0daf9421a52f)|![image](https://github.com/user-attachments/assets/b9d9f063-fc86-4c73-9c22-5fc87a892ee8)|![image](https://github.com/user-attachments/assets/8d168991-4f5d-4ed2-8e9b-4626a7351e14)|![image](https://github.com/user-attachments/assets/05c76d25-c0c3-4e68-9793-28cfbe5413af)|
|정혜원|장혜원|정현욱|김채연|김승중|
|   [@hijjoy](https://github.com/hijjoy)   |  [@hyewoniiiii](https://github.com/hyewoniiiii)     |  [@JeongWhale](https://github.com/JeongWhale)     | [@chaerish](https://github.com/chaerish)     |  [@kimsj0970](https://github.com/kimsj0970)     | 
</div>

<br/><br/>

## Technology Stack
<div align=center> 
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"> 
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
  <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"> 
  <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white">
  <br>
  
  <img width="145" alt="image" src="https://github.com/user-attachments/assets/dade43e3-c0ab-46da-9798-92d2e61c87b7">
  <img src="https://img.shields.io/badge/ZustandStudy-000000?style=for-the-badge&logo=zustandstudy&logoColor=white">
  <img src="https://img.shields.io/badge/MediaPipe-0097A7?style=for-the-badge&logo=mediapipe&logoColor=white">
  <img src="https://img.shields.io/badge/ReactWebcam-728E9B?style=for-the-badge&logo=react&logoColor=white">
  <br>

  <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white">
  <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white">
  <img src="https://img.shields.io/badge/AmazonS3-E85C33?style=for-the-badge&logo=amazon&logoColor=white">
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white"> 
  <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <br>
  
</div>
<br/><br/>

## 향후 기대 효과
<h3>Business Model: 패션 기업 콜라보</h3>

온라인 시장이 활발한 요즘, 오프라인에서의 차별화된 경험이 중요합니다.<br>
저희 FITTING PAIR는 패션 기업과의 콜라보레이션(팝업 스토어 등)을 통해 오프라인 매장에서 고객에게 직접적인 체험을 제공하고, 이를 통해 상호 이익을 창출할 수 있는 경제적 방향까지 모색했습니다.
