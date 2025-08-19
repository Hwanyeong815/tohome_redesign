export default [
    {
        liquidId: 1,
        name: '[웅진] \n하늘보리 500ml',
        price: 1600, //가격
        discountedPrice: 1200, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 25, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100ml당 240원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/01.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '생수 · 탄산수', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 1 },
            { name: '신상품', rank: 40 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '웅진식품(주)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 2,
        name: '[롯데] \n초가을 우엉차 500ml',
        price: 1580, //가격
        discountedPrice: 1270, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 19, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100ml당 254원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/02.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '생수 · 탄산수', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 2 },
            { name: '신상품', rank: 39 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '롯데칠성(주)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 3,
        name: '[롯데] \n오늘의차 수염차 500ml',
        price: 1580, //가격
        discountedPrice: 1270, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 19, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100ml당 254원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/03.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '생수 · 탄산수', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 3 },
            { name: '신상품', rank: 38 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '롯데칠성(주)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 4,
        name: '[농심] \n오이오차녹차 525ml',
        price: 1850, //가격
        discountedPrice: 1570, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 15, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100ml당 299원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/04.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '생수 · 탄산수', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 4 },
            { name: '신상품', rank: 37 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '농심(경인)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 5,
        name: '[풀무원] \n특등급 국산 콩물 960g',
        price: 5980, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100ml당 623원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/05.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '우유 · 두유 · 요거트', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 5 },
            { name: '신상품', rank: 36 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '풀무원식품(주)생식품', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 6,
        name: '[서울우유] \n짜요짜요 3종',
        price: 2650, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/06.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '우유 · 두유 · 요거트', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 6 },
            { name: '신상품', rank: 35 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '서울우유고촌대리점', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 7,
        name: '[서울우유] \nA2플러스 3종',
        price: 1800, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/07.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '우유 · 두유 · 요거트', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 7 },
            { name: '신상품', rank: 34 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '서울우유고촌대리점', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 8,
        name: '[연세] \n검은콩&고칼슘 팩두유 190ml×16',
        price: 20000, //가격
        discountedPrice: 12900, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 35, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100ml당 403원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/08.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '우유 · 두유 · 요거트', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 8 },
            { name: '신상품', rank: 33 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '연세우유 도곡점', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 9,
        name: '[허니파머스] \n애플 착즙주스 20입',
        price: 35500, //가격
        discountedPrice: 17750, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 50, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/09.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '탄산음료 · 주스', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 9 },
            { name: '신상품', rank: 32 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '허니파머스(가공)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 10,
        name: '[인생주스] \n타트체리 100% 착즙주스',
        des: '차갑게 드시면 더욱 맛있습니다. *소비기한 임박 상품입니다.(25년 11월 13일)',
        price: 49000, //가격
        discountedPrice: 37200, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 24, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/10.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '탄산음료 · 주스', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 10 },
            { name: '신상품', rank: 31 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '인생주스', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 11,
        name: '[인생주스] \n블루베리 100% 착즙주스',
        des: '차갑게 드시면 더욱 맛있습니다.',
        price: 53500, //가격
        discountedPrice: 41000, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 24, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/11.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '탄산음료 · 주스', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 11 },
            { name: '신상품', rank: 30 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '인생주스', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 12,
        name: '[풀무원] \n아임리얼 100 망고 140ml x 6입',
        des: '',
        price: 7480, //가격
        discountedPrice: 4980, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 33, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100ml당 593원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/12.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '탄산음료 · 주스', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 12 },
            { name: '신상품', rank: 29 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '풀무원식품(주)생식품', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 13,
        name: '[롯데] \n레쓰비 마일드 175ml',
        des: '',
        price: 680, //가격
        discountedPrice: 600, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 11, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100ml당 343원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/13.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '커피', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 13 },
            { name: '신상품', rank: 28 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '롯데칠성(주)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 14,
        name: '[AGF] \n포션커피 라이트슈거 108g(18g*6개입)',
        des: '',
        price: 4500, //가격
        discountedPrice: 4180, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 7, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/14.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '커피', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 14 },
            { name: '신상품', rank: 27 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '매크로통상(주)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 15,
        name: '[hy] \n하이브루 아인슈페너',
        des: '',
        price: 2800, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/15.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '커피', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 15 },
            { name: '신상품', rank: 26 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '한국야쿠르트', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 16,
        name: '[스타벅스] \n프라푸치노 모카 281ml',
        des: '',
        price: 2850, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100ml당 1,014원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/16.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '커피', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 16 },
            { name: '신상품', rank: 25 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '동서식품(주)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 17,
        name: '[웨지우드] \n셀렉티드 티세트 2종, 티포유 티세트 5종 (택1)',
        des: '',
        price: 19600, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100ml당 1,014원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/17.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '차 · 과실청', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 17 },
            { name: '신상품', rank: 24 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '웨지우드', // 생산자
            packagingType: '', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 18,
        name: '[modoo] \n모두의 망고청 1kg',
        des: '개봉 후에는 재냉동하지 마시고(냉장 보관) 5일 이내 섭취를 권장드립니다.',
        price: 16500, //가격
        discountedPrice: 4950, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 70, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/18.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '차 · 과실청', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 18 },
            { name: '신상품', rank: 23 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '모두(modoo)', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 19,
        name: '[modoo] \n모두의 제주 유기농 감귤즙 500ml',
        des: '차갑게 드시면 더욱 맛있습니다 (최소 주문수량 2개)',
        price: 7500, //가격
        discountedPrice: 4500, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 40, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/19.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '차 · 과실청', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 19 },
            { name: '신상품', rank: 22 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '모두(modoo)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 20,
        name: '[청정원] \n홍초 저당 레몬&라임 900ml',
        des: '',
        price: 12980, //가격
        discountedPrice: 8770, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 32, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/20.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '차 · 과실청', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 20 },
            { name: '신상품', rank: 21 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '대상', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 21,
        name: '[제주본초] \n동백꽃, 제주',
        des: '16도 365ml',
        price: 12000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/21.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '전통주 · 논알콜', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 21 },
            { name: '신상품', rank: 20 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '제주본초 협동조합', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 22,
        name: '[제주본초] \n유채꽃, 제주',
        des: '16도 365ml',
        price: 12000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/22.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '전통주 · 논알콜', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 22 },
            { name: '신상품', rank: 19 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '제주본초 협동조합', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 23,
        name: '[명인명촌] \n[전통주] 홍승희 오미자 탄산주 500ml',
        des: '※ 발효과정에서 생긴 천연 탄산으로 인해 개봉시 흘러 넘칠 수 있습니다. 45도로 기울여 여닫기를 반복 후 탄산이 안정되면 개봉 권장합니다.',
        price: 40000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/23.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '전통주 · 논알콜', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 23 },
            { name: '신상품', rank: 18 },
        ],
        details: {
            origin: '국산', // 원산지
            manufacturer: '농업회사법인 주식회사 밀과노닐다', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 24,
        name: '[두루미양조장] \n전통주 선물세트 5호 (4종 中 택1)',
        des: '',
        price: 48000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/24.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '전통주 · 논알콜', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 24 },
            { name: '신상품', rank: 17 },
        ],
        details: {
            origin: '국산', // 원산지
            manufacturer: '농업회사법인 주식회사우창', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 25,
        name: '[워터라이트] \n마시는 수액 음료 워터라이트 비긴스 (230ml*24개입)',
        des: '간편하게 수분 충전하는 마시는 수액 음료',
        price: 48700, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/25.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '대용량 음료', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 25 },
            { name: '신상품', rank: 16 },
        ],
        details: {
            origin: '', // 원산지
            manufacturer: '에이치앤파이(주)', // 생산자
            packagingType: '', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 26,
        name: '[에스비] \n석수 2L 6병 생수',
        des: '',
        price: 5900, //가격
        discountedPrice: 5000, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 15, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/26.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '대용량 음료', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 26 },
            { name: '신상품', rank: 15 },
        ],
        details: {
            origin: '대한민국', // 원산지
            manufacturer: '주식회사 에스비', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 27,
        name: '[에스비] 석수 500ml 20병 생수',
        des: '',
        price: 6500, //가격
        discountedPrice: 5600, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 13, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/27.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '대용량 음료', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 27 },
            { name: '신상품', rank: 14 },
        ],
        details: {
            origin: '대한민국', // 원산지
            manufacturer: '주식회사 에스비', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 28,
        name: '[에스비] \n백산수 330ml 20병 생수',
        des: '',
        price: 8500, //가격
        discountedPrice: 7820, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 8, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/28.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '대용량 음료', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 28 },
            { name: '신상품', rank: 13 },
        ],
        details: {
            origin: '중국', // 원산지
            manufacturer: '주식회사 에스비', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 29,
        name: '[에스비] \n백산수 1L 12병 생수',
        des: '',
        price: 8700, //가격
        discountedPrice: 8000, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 8, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/29.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '대용량 음료', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 29 },
            { name: '신상품', rank: 12 },
        ],
        details: {
            origin: '중국', // 원산지
            manufacturer: '주식회사 에스비', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 30,
        name: '[에스비] \n백산수 1L 12병 생수',
        des: '',
        price: 8700, //가격
        discountedPrice: 8000, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 8, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/30.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '대용량 음료', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 30 },
            { name: '신상품', rank: 11 },
        ],
        details: {
            origin: '중국', // 원산지
            manufacturer: '주식회사 에스비', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 31,
        name: '[트레비] \n라임 500ml',
        des: '',
        price: 1480, //가격
        discountedPrice: 1270, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 14, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/31.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '생수 · 탄산수', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 31 },
            { name: '신상품', rank: 10 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '롯데칠성(주)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 32,
        name: '[트레비] \n자몽 500ml',
        des: '',
        price: 1480, //가격
        discountedPrice: 1270, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 14, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/32.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '생수 · 탄산수', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 32 },
            { name: '신상품', rank: 9 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '롯데칠성(주)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 33,
        name: '[팔도] \n뽀로로 보리차 220ml',
        des: '',
        price: 1600, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/33.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '생수 · 탄산수', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 33 },
            { name: '신상품', rank: 8 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '팔도', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 34,
        name: '[연세] \n아몬드잣 팩두유 190ml×16',
        des: '',
        price: 20000, //가격
        discountedPrice: 12900, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 35, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100ml당 403원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/34.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '우유 · 두유 · 요거트', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 34 },
            { name: '신상품', rank: 7 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '연세우유 도곡점', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 35,
        name: '[매일] \n매일두유99.89 2종',
        des: '',
        price: 1500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100ml당 789원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/35.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '우유 · 두유 · 요거트', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 35 },
            { name: '신상품', rank: 6 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '매일유업', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 36,
        name: '[일동후디스] \n그릭요거트 플레인 450g',
        des: '',
        price: 6400, //가격
        discountedPrice: 6120, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 4, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,360원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/36.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '우유 · 두유 · 요거트', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 36 },
            { name: '신상품', rank: 5 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '일동후디스(주)', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 37,
        name: '[얼라이브] \n유기농 콤부차 진저레몬 315ml',
        des: '',
        price: 3800, //가격
        discountedPrice: 3640, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 4, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100ml당 1,156원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/37.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '탄산음료 · 주스', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 37 },
            { name: '신상품', rank: 4 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '프레시코', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 38,
        name: '[얼라이브] \n유기농 콤부차 오리지날 315ml',
        des: '',
        price: 3800, //가격
        discountedPrice: 3640, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 4, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100ml당 1,156원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/38.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '탄산음료 · 주스', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 38 },
            { name: '신상품', rank: 3 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '프레시코', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 39,
        name: '[에이블마켓] \n함께 가꾸는 나무 커피랑 커피백 100개입',
        des: '',
        price: 33500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/39.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '커피', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 39 },
            { name: '신상품', rank: 2 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '서울특별시립 장애인생산품판매시설', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        liquidId: 40,
        name: '[명인명촌] \n[전통주] 이성우 백일주(十年) 360ml, 750ml',
        des: '360ml 상품은 10년 숙성이 아닌 일반 숙성 제품입니다.',
        price: 49000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu10/40.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '물·우유·커피·음료', // 대분류 (ex: 식품, 의류, 가전)
            sub: '전통주 · 논알콜', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 40 },
            { name: '신상품', rank: 1 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '농업회사법인 주식회사 밀과노닐다', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
];
