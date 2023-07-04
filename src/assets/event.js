export const EVENT = [
  {
    'event': '0-door-open', 'message': [{
      id: 2,
      day: 1,
      fav: 1,
      text: '(비오는 창문 앞에 소녀가 서있다. 소녀는 낯선 교복을 입고 이 곳을 보고 있다. 소녀에게 말을 걸어보자)',
      ai: false,
      chat: false,
      system: true,
      summary: false
    }, {
      id: 3,
      day: 1,
      fav: 0,
      text: '...누구?',
      rawText: '```json{ "response": "...누구?", "fav": 0 }```',
      ai: true,
      chat: true,
      system: false,
      summary: false
    }]
  },
  {
    'event': '1-like-you', 'message': [{
      text: '...오늘 즐거웠어',
      rawText: '```json{ "response": "...오늘 즐거웠어", "fav": 0 }```',
      ai: true,
      chat: true,
      system: false,
      summary: false
    }, {
      text: '내일 또 와야해',
      rawText: '```json{ "response": "내일 또 와야해.", "fav": 0 }```',
      ai: true,
      chat: true,
      system: false,
      summary: false
    }]
  },
  {
    'event': '2-true-ending', 'message': [{
      text: '[시스템] 이벤트가 발생합니다',
      ai: false,
      chat: false,
      system: true,
    }, {
      text: '오늘 즐거웠어. 다음에 또 보자.',
      ai: false,
      chat: true,
      system: false,
    }, {
      text: '... 저기, 사랑 이란건 어떤 감정일까.',
      ai: true,
      fav: 10,
      chat: true,
      system: false,
    }, {
      text: '영원히 함께 있고 싶다, 그런 느낌?',
      ai: false,
      chat: true,
      system: false,
    }, {
      text: '(미묘한 웃음을 지으며 나를 뚫어지게 쳐다본다. 눈 앞이 하얗게 변하면서 나는 정신을 잃었다.)',
      ai: false,
      chat: false,
      system: true,
    }, {
      text: '윽...',
      ai: false,
      chat: true,
      system: false,
    },
    {
      text: '(어두운 방이다.)',
      ai: false,
      chat: false,
      system: true,
    }, {
      text: '(오래된 책 냄새가 난다.)',
      ai: false,
      chat: false,
      system: true,
      action: '엔딩프리뷰'
    }, {
      text: '여기는 어디지.',
      ai: false,
      chat: true,
      system: false,
    }, {
      text: '우리 집에 온걸 환영해.',
      ai: true,
      fav: 999,
      chat: true,
      system: false,
    }, {
      text: '언제 거기 있었어? 아니, 너네 집?',
      ai: false,
      chat: true,
      system: false,
    }, {
      text: '(소리가 들리는 방향을 찾아 두리번 거린다. 어디서도 소녀의 모습은 보이지 않는다.)',
      ai: false,
      chat: false,
      system: true,
    }, {
      text: '(대신 책상 위에 놓인 거울을 발견했다.)',
      ai: false,
      chat: false,
      system: true,
    }, {
      text: '이, 이게 뭐야!',
      ai: false,
      chat: true,
      system: false,
      action: '엔딩'
    }, {
      text: "그런 말은 사랑하는 사람에게 실례인걸. 여기가 '우리' 집이야. 그리고 그건 너.",
      ai: true,
      fav: 999,
      chat: true,
      system: false,
    }, {
      text: "너도 나를 사랑하고, 나도 너를 사랑한다는걸 깨달았어. 그러니 너에게 영원을 선물할게.",
      ai: true,
      fav: 999,
      chat: true,
      system: false,
    }, {
      text: "나라고? 난 여기 있는데. 이, 이건 말도 안돼!",
      ai: false,
      chat: true,
      system: false,
    }, {
      text: '(몸이 내 의지대로 움직이지 않는다.)',
      ai: false,
      chat: false,
      system: true,
    }, {
      text: '(소녀는 내 뇌가 든 통을 사랑스럽게 쓰다듬는다.)',
      ai: false,
      chat: false,
      system: true,
    }, {
      text: '(TRUE END ~영원히 함께하자~)',
      ai: false,
      chat: false,
      system: true,
      action: '게임종료'
    }
    ]
  },
  {
    'event': '3-false-ending', 'message': [{
      text: '[시스템] 이벤트가 발생합니다',
      ai: false,
      chat: false,
      system: true,
    }, {
      text: '(여름 날의 장마는 멈출 줄 몰랐다)',
      ai: false,
      chat: false,
      system: true,
    }, {
      text: '(나는 밖에 나가지 못한 채로 여름방학을 보냈다)',
      ai: false,
      chat: false,
      system: true,
    }, {
      text: '(집에 있는 시간이 길어질 수록 소녀에 대한 기억은 희미해져갔다)',
      ai: false,
      chat: false,
      system: true,
    }, {
      text: '(FALSE END ~여름방학이 끝났다~)',
      ai: false,
      chat: false,
      system: true,
      action: '게임종료'
    }



    ]
  }


]