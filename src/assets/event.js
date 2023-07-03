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
      text: '(엔딩 스크립트 1)',
      ai: false,
      chat: false,
      system: true,
      summary: false
    },
    {
      text: '(엔딩 스크립트 2)',
      ai: false,
      chat: false,
      system: true,
      summary: false
    }


    ]
  },
  {
    'event': '3-false-ending', 'message': [{
      text: '(여름 날의 폭풍은 멈출 줄 몰랐다)',
      ai: false,
      chat: false,
      system: true,
      summary: false
    },
    {
      text: '(나는 밖에 나가지 못한 채로 여름방학을 보냈다)',
      ai: false,
      chat: false,
      system: true,
      summary: false
    },
    {
      text: '(집에 있는 시간이 길어질 수록 소녀에 대한 기억은 희미해져갔다)',
      ai: false,
      chat: false,
      system: true,
      summary: false
    },
    {
      text: '(FALSE END ~여름방학이 끝났다~)',
      ai: false,
      chat: false,
      system: true,
      summary: false
    }



    ]
  }


]