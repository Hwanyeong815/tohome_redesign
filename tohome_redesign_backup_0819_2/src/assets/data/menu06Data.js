export default [
    {
        sideId: 1,
        name: '[압구정 예향] \n5시간 우려낸 정성 가득 보양 삼계탕',
        des: '',
        price: 18000, //가격
        discountedPrice: 16200, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 10, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 900원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/01.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '엄마 손맛 즉석반찬', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 1 },
            { name: '신상품', rank: 40 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '예향', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 2,
        name: '[압구정 예향] \n소고기 듬뿍 수제 함박',
        des: '',
        price: 12000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 4,000원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/02.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '엄마 손맛 즉석반찬', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 2 },
            { name: '신상품', rank: 39 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '예향', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 3,
        name: '[비비고] \n가자미구이 70g',
        des: '',
        price: 5480, //가격
        discountedPrice: 3980, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 27, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/03.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '엄마 손맛 즉석반찬', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 3 },
            { name: '신상품', rank: 38 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '씨제이', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 4,
        name: '[비비고] \n고등어구이 60g',
        des: '',
        price: 5480, //가격
        discountedPrice: 3980, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 27, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/04.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '엄마 손맛 즉석반찬', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 4 },
            { name: '신상품', rank: 37 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '씨제이', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 5,
        name: '[풀무원] \n와사비국산콩생나또8개입세트 356g',
        des: '',
        price: 11600, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/05.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '김치 · 젓갈 · 장아찌', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 5 },
            { name: '신상품', rank: 36 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '풀무원', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 6,
        name: '[사비니 타르투피] \n복숭아 송로버섯 오일 절임 175g',
        des: '',
        price: 33000, //가격
        discountedPrice: 23100, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 30, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 13,200원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/06.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '김치 · 젓갈 · 장아찌', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 6 },
            { name: '신상품', rank: 35 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '에봇', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 7,
        name: '[리졸리] \n엔쵸비 58g',
        des: '',
        price: 11000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 1,897원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/07.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '김치 · 젓갈 · 장아찌', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 7 },
            { name: '신상품', rank: 34 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: 'SEE21(씨21)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 8,
        name: '[명인명촌] \n김정배 젓갈 250g, 3종 낙지, 창란, 오징어',
        des: '',
        price: 15000, //가격
        discountedPrice: 11250, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 25, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 450원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/08.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '김치 · 젓갈 · 장아찌', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 8 },
            { name: '신상품', rank: 33 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '명인명촌', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 9,
        name: '[경복궁BLACK] \n한우 떡갈비 200g',
        des: '',
        price: 15000, //가격
        discountedPrice: 12700, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 15, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 6,350원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/09.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '메인 요리 · 밀키트', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 9 },
            { name: '신상품', rank: 32 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '경복궁BLACK', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 10,
        name: '[경복궁BLACK] \n한우불고기 600g',
        des: '',
        price: 35000, //가격
        discountedPrice: 29700, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 15, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 4,950원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/10.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '메인 요리 · 밀키트', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 10 },
            { name: '신상품', rank: 31 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '경복궁BLACK', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 11,
        name: '[경복궁BLACK] \n양념불고기 600g',
        des: '',
        price: 20000, //가격
        discountedPrice: 17000, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 15, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 2,833원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/11.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '메인 요리 · 밀키트', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 11 },
            { name: '신상품', rank: 30 },
        ],
        details: {
            origin: '별도표기', // 원산지
            manufacturer: '경복궁BLACK', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 12,
        name: '[경복궁BLACK] \n칼집LA갈비 600g',
        des: '',
        price: 30000, //가격
        discountedPrice: 27000, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 10, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 4,500원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/12.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '메인 요리 · 밀키트', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 12 },
            { name: '신상품', rank: 29 },
        ],
        details: {
            origin: '별도표기', // 원산지
            manufacturer: '경복궁BLACK', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 13,
        name: '[존쿡델리미트] \n불닭 킬바사 270g',
        des: '',
        price: 9180, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 3,400원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/13.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '떡볶이 · 만두 · 냉동간식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 13 },
            { name: '신상품', rank: 28 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '존쿡델리미트(에스푸드)', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 14,
        name: '[존쿡델리미트] \n부어스첸 핫도그 300g 6개입',
        des: '',
        price: 8980, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 2,993원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/14.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '떡볶이 · 만두 · 냉동간식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 14 },
            { name: '신상품', rank: 27 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '존쿡델리미트(에스푸드)', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 15,
        name: '[더블루팜] \n루지 미트볼 치즈카츠 270g',
        des: '',
        price: 10000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 3,704원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/15.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '떡볶이 · 만두 · 냉동간식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 15 },
            { name: '신상품', rank: 26 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '주식회사 더블루팜', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 16,
        name: '[존쿡델리미트X보마켓] \n시그니처 로제 떡볶이 485g',
        des: '',
        price: 7780, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,604원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/16.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '떡볶이 · 만두 · 냉동간식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 16 },
            { name: '신상품', rank: 25 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '주식회사 더블루팜', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 17,
        name: '[뽀모] \n바칼라우 150g',
        des: '',
        price: 9500, //가격
        discountedPrice: 8070, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 15, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 5,380원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/17.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '죽 · 스프 · 카레', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 17 },
            { name: '신상품', rank: 24 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '뽀모', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 18,
        name: '[햇반] \n소프트밀 양송이 크림수프',
        des: '',
        price: 4480, //가격
        discountedPrice: 2170, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 51, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/18.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '죽 · 스프 · 카레', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 18 },
            { name: '신상품', rank: 23 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '씨제이', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 19,
        name: '[햇반] \n소프트밀 베이컨감자 크림수프',
        des: '',
        price: 4480, //가격
        discountedPrice: 2170, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 51, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/19.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '죽 · 스프 · 카레', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 19 },
            { name: '신상품', rank: 22 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '씨제이', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 20,
        name: '[차오차이] \n스파이시 블랙페퍼짜장',
        des: '본 상품은 전자레인지 조리용입니다.',
        price: 4480, //가격
        discountedPrice: 2510, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 43, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/20.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '죽 · 스프 · 카레', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 20 },
            { name: '신상품', rank: 21 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '샘표', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 21,
        name: '[존쿡델리미트] \n부어스트 2종',
        des: '부드럽고 담백한 맛의 독일식 소시지 부어스트',
        price: 9180, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 2,869원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/21.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '햄 · 어묵 · 반찬재료', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 21 },
            { name: '신상품', rank: 20 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '존쿡델리미트(에스푸드)', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 22,
        name: '[존쿡 델리미트] \n베이컨 4종 120~150g',
        des: '',
        price: 4680, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 2,340원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/22.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '햄 · 어묵 · 반찬재료', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 22 },
            { name: '신상품', rank: 19 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '존쿡델리미트(에스푸드)', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 23,
        name: '[존쿡델리미트] \n비프 핫도그 소시지 300g ',
        des: '',
        price: 10780, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 3,593원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/23.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '햄 · 어묵 · 반찬재료', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 23 },
            { name: '신상품', rank: 18 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '존쿡델리미트(에스푸드)', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 24,
        name: '[뽀모] \n후레쉬 수제 훈제연어 100g',
        des: '',
        price: 13000, //가격
        discountedPrice: 11050, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 15, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/24.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '햄 · 어묵 · 반찬재료', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 24 },
            { name: '신상품', rank: 17 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '뽀모', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 25,
        name: '[압구정 예향] \n순두부 찌개',
        des: '',
        price: 7900, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,317원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/25.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '엄마 손맛 즉석반찬', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 25 },
            { name: '신상품', rank: 16 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '예향', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 26,
        name: '[압구정 예향] \n맑은 명란국',
        des: '',
        price: 8500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,308원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/26.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '엄마 손맛 즉석반찬', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 26 },
            { name: '신상품', rank: 15 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '예향', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 27,
        name: '[압구정 예향] \n부드러운 순두부 황태국',
        des: '',
        price: 7500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,154원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/27.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '엄마 손맛 즉석반찬', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 27 },
            { name: '신상품', rank: 14 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '예향', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 28,
        name: '[압구정 예향] \n국산 꽃게 된장찌개',
        des: '오늘 저녁 반찬 고민 끝 넉넉한 양으로 한끼 푸짐하게!',
        price: 8500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,417원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/28.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '엄마 손맛 즉석반찬', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 28 },
            { name: '신상품', rank: 13 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '예향', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 29,
        name: '[명인명촌] \n이정하 마늘쫑 장아찌 250g',
        des: '',
        price: 11500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 4,600원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/29.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '김치 · 젓갈 · 장아찌', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 29 },
            { name: '신상품', rank: 12 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '명인명촌', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 30,
        name: '[명인명촌] \n순창의장맛 더덕장아찌 220g',
        des: '',
        price: 15500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 705원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/30.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '김치 · 젓갈 · 장아찌', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 30 },
            { name: '신상품', rank: 11 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '명인명촌', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 31,
        name: '[종가집] \n옛맛깻잎지200g',
        des: '',
        price: 7880, //가격
        discountedPrice: 6980, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 11, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 3,490원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/31.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '김치 · 젓갈 · 장아찌', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 31 },
            { name: '신상품', rank: 10 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '대상(종가집)', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 32,
        name: '[맛의명태자] \n순한맛의 명태자 자른명란 180g',
        des: '',
        price: 16000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 8,889원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/32.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '김치 · 젓갈 · 장아찌', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 32 },
            { name: '신상품', rank: 9 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '대경에프앤비(주)', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 33,
        name: '[원테이블] \n페퍼로니 피자 330g',
        des: '',
        price: 10500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 3,182원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/33.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '메인 요리 · 밀키트', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 33 },
            { name: '신상품', rank: 8 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '현대그린푸드(원테이블)', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 34,
        name: '[원테이블] \n트러플 버섯피자 300g',
        des: '버섯의 쫄깃한 식감과 향긋한 트러플 향의 만남',
        price: 11000, //가격
        discountedPrice: 10450, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 5, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 3,483원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/34.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '메인 요리 · 밀키트', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 34 },
            { name: '신상품', rank: 7 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '현대그린푸드(원테이블)', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 35,
        name: '[반찬가게 슈퍼키친] \n후레쉬 모짜렐라 리가토니 260g',
        des: '',
        price: 7500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 2,885원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/35.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '메인 요리 · 밀키트', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 35 },
            { name: '신상품', rank: 6 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '슈퍼키친', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 36,
        name: '[압구정 예향] \n마늘양념에 재운 닭다리살구이',
        des: '',
        price: 11000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 5,000원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/36.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '메인 요리 · 밀키트', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 36 },
            { name: '신상품', rank: 5 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '예향', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 37,
        name: '[오똘] \n붕어빵 팥앙금 15입',
        des: '소비기한 25년 10월 25일까지 입니다.',
        price: 16700, //가격
        discountedPrice: 8350, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 50, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/37.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '떡볶이 · 만두 · 냉동간식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 37 },
            { name: '신상품', rank: 4 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '오똘', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 38,
        name: '[오똘] \n국화빵 슈크림 20입',
        des: '',
        price: 11300, //가격
        discountedPrice: 5960, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 47, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/38.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '떡볶이 · 만두 · 냉동간식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 38 },
            { name: '신상품', rank: 3 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '오똘', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 39,
        name: '[오즈키친] \n푸팟퐁카레 180g',
        des: '',
        price: 3980, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/39.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '죽 · 스프 · 카레', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 39 },
            { name: '신상품', rank: 2 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '오뚜기', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        sideId: 40,
        name: '[선셋스위밍] \n초당 옥수수 스프',
        des: '',
        price: 4000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu06/39.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밑반찬·간식', // 대분류 (ex: 식품, 의류, 가전)
            sub: '죽 · 스프 · 카레', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 40 },
            { name: '신상품', rank: 1 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '주식회사캐비아', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
];
