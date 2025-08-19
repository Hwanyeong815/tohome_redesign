export default [
    {
        bakeryId: 1,
        name: '[태극당] \n월병3종 세트',
        price: 37200, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 4,429원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/01.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '베이커리 · 케이크 · 파이', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 1 },
            { name: '신상품', rank: 40 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '태극당', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 2,
        name: '[태극당] \n정통오란다 세트 12개입',
        des: '부드럽고 쫀득한 식감의 정통오란다 세트',
        price: 28000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 8,187원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/02.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '베이커리 · 케이크 · 파이', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 2 },
            { name: '신상품', rank: 39 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '태극당', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 3,
        name: '[타쿠미야] \n고급생식빵 하프400g',
        des: '',
        price: 7000, //가격
        discountedPrice: 5600, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 20, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,400원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/03.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '베이커리 · 케이크 · 파이', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 3 },
            { name: '신상품', rank: 38 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '타쿠미야(투홈)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 4,
        name: '[나폴레옹] \n얼그레이 파운드 330g',
        des: '',
        price: 19000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 5,758원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/04.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '베이커리 · 케이크 · 파이', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 4 },
            { name: '신상품', rank: 37 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '나폴레옹베이커리', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 5,
        name: '[상하] \n유기농 우리아이치즈 180g 3종',
        des: '아기치즈 소비기한 임박 상품입니다.',
        price: 6860, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 381원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/05.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '치즈', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 5 },
            { name: '신상품', rank: 36 },
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
        bakeryId: 6,
        name: '[상하] \nMini 치즈 3종',
        des: '',
        price: 2700, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 563원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/06.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '치즈', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 6 },
            { name: '신상품', rank: 35 },
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
        bakeryId: 7,
        name: '[상하] \n더블업 모짜렐라 240g',
        des: '',
        price: 9780, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 272원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/07.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '치즈', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 7 },
            { name: '신상품', rank: 34 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '매일유업', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 8,
        name: '[상하] \n스트링치즈 링스 80g',
        des: '',
        price: 6980, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 873원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/08.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '치즈', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 8 },
            { name: '신상품', rank: 33 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '매일유업', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 9,
        name: '[허니파머스] \n천연벌꿀 3종 아카시아,야생화,밤나무 각 250g',
        des: '',
        price: 21000, //가격
        discountedPrice: 9900, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 52, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/09.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '잼 · 버터 · 꿀', // 중분류 (ex: 과일, 채소, 수산물)
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
        bakeryId: 10,
        name: '[허니파머스] \n저당 저칼로리 사과잼 220g',
        des: '소비기한 25년 10월 21일까지 입니다.',
        price: 15000, //가격
        discountedPrice: 6000, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 60, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/10.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '잼 · 버터 · 꿀', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 10 },
            { name: '신상품', rank: 31 },
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
        bakeryId: 11,
        name: '[쥬에그] \n잼 2종',
        des: '',
        price: 11000, //가격
        discountedPrice: 8480, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 22, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 2,650원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/11.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '잼 · 버터 · 꿀', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 11 },
            { name: '신상품', rank: 30 },
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
        bakeryId: 12,
        name: '[본마망] \n피넛 스프레드 크런치',
        des: '',
        price: 10000, //가격
        discountedPrice: 8860, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 11, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 2,650원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/12.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '잼 · 버터 · 꿀', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 12 },
            { name: '신상품', rank: 29 },
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
        bakeryId: 13,
        name: '[나폴레옹] \n유자스폰지 430g',
        des: '',
        price: 27500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 6,395원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/13.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '선물용 베이커리와 치즈', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 13 },
            { name: '신상품', rank: 28 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '나폴레옹베이커리', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 14,
        name: '[나폴레옹] \n오렌지 파운드 290g',
        des: '',
        price: 19000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 6,552원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/14.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '선물용 베이커리와 치즈', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 14 },
            { name: '신상품', rank: 27 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '나폴레옹베이커리', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 15,
        name: '[나폴레옹] \n해풍쑥 크럼블 파운드 350g',
        des: '',
        price: 19000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 5,429원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/15.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '선물용 베이커리와 치즈', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 15 },
            { name: '신상품', rank: 26 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '나폴레옹베이커리', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 16,
        name: '[나폴레옹] \n쿠키 베스트 세트 4개입',
        des: '',
        price: 49000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 724원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/16.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '선물용 베이커리와 치즈', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 16 },
            { name: '신상품', rank: 25 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '나폴레옹베이커리', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 17,
        name: '[나폴레옹] \n초코칩 모닝롤',
        des: '',
        price: 5800, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 312원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/17.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '베이커리 · 케이크 · 파이', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 17 },
            { name: '신상품', rank: 24 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '나폴레옹베이커리', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 18,
        name: '[나폴레옹] \n구로칸토슈니탱',
        des: '',
        price: 27500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 661원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/18.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '베이커리 · 케이크 · 파이', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 18 },
            { name: '신상품', rank: 23 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '나폴레옹베이커리', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 19,
        name: '[나폴레옹] \n화이트롤 450g',
        des: '',
        price: 24500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 5,444원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/19.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '베이커리 · 케이크 · 파이', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 19 },
            { name: '신상품', rank: 22 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '나폴레옹베이커리', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 20,
        name: '[PNB풍년제과] \n수제 초코파이 5개입',
        des: '',
        price: 11500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 288원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/20.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '베이커리 · 케이크 · 파이', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 20 },
            { name: '신상품', rank: 21 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: 'PNB풍년제과', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 21,
        name: '[덴마크] \n피자치즈 4입 280g',
        des: '',
        price: 8980, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 321원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/21.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '치즈', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 21 },
            { name: '신상품', rank: 20 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '동원 F&B', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 22,
        name: '[사비니 타르투피] \n송로버섯 치즈크림소스 180g',
        des: '',
        price: 39000, //가격
        discountedPrice: 31200, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 20, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 17,333원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/22.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '치즈', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 22 },
            { name: '신상품', rank: 19 },
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
        bakeryId: 23,
        name: '[덴마크] \n리코타 치즈 150g',
        des: '',
        price: 5980, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 399원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/23.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '치즈', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 23 },
            { name: '신상품', rank: 18 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '동원데어리푸드', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 24,
        name: '[효덕목장] \n썬러브 구워먹는 치즈 150g',
        des: '땅을 건강하게 만들고 씨앗을 뿌려 만든 풀을 먹고 자란건강한 효덕목장행복순이 젖소의 원유로 만들었어요',
        price: 10000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/24.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '치즈', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 24 },
            { name: '신상품', rank: 17 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: 'Sun-Love 치즈', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 25,
        name: '[도이퉁] \n마카다미아 넛 스프레드 2종 200g',
        des: '',
        price: 14800, //가격
        discountedPrice: 13200, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 10, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 6,600원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/25.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '잼 · 버터 · 꿀', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 25 },
            { name: '신상품', rank: 16 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '주식회사 머천트리', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송 ', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 26,
        name: '[위내추럴] \n유층분리 없는 100% 땅콩버터 크리미',
        des: '',
        price: 15000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/26.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '잼 · 버터 · 꿀', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 26 },
            { name: '신상품', rank: 15 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '링크트레이드', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송 ', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 27,
        name: '[위내추럴] \n유층분리 없는 100% 땅콩버터 크런치',
        des: '',
        price: 15000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/27.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '잼 · 버터 · 꿀', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 27 },
            { name: '신상품', rank: 14 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '링크트레이드', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송 ', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 28,
        name: '[오뚜기] \n딸기쨈 500g',
        des: '',
        price: 7780, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,556원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/28.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '잼 · 버터 · 꿀', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 28 },
            { name: '신상품', rank: 13 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '오뚜기', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송 ', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 29,
        name: '[리치몬드 과자점] \n레몬 케이크세트 6개입',
        des: '',
        price: 25400, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 847원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/29.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '선물용 베이커리와 치즈', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 29 },
            { name: '신상품', rank: 12 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '리치몬드', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송 ', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 30,
        name: '[그래인스쿠키] \n샤르망 세트',
        des: '',
        price: 25000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 694원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/30.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '선물용 베이커리와 치즈', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 30 },
            { name: '신상품', rank: 11 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '그래인스쿠키', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송 ', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 31,
        name: '[베즐리] \n까사테라',
        des: '',
        price: 7200, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 400원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/31.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '선물용 베이커리와 치즈', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 31 },
            { name: '신상품', rank: 10 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '베즐리베이커리', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 32,
        name: '[서울카스테라] \n하프사이즈 3종',
        des: '초코 소비기한 25.07.26 까지 입니다.',
        price: 9000, //가격
        discountedPrice: 7650, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 15, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 510원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/32.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '선물용 베이커리와 치즈', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 32 },
            { name: '신상품', rank: 9 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '서울카스테라', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 33,
        name: '[블랑제리코팡] \n시그니처 바게트',
        des: '',
        price: 5000, //가격
        discountedPrice: 4500, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 10, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 161원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/33.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '베이커리 · 케이크 · 파이', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 33 },
            { name: '신상품', rank: 8 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '블랑제리코팡', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 34,
        name: '[블랑제리코팡] \n버터풍미 브리오쉬 식빵160g',
        des: '',
        price: 5700, //가격
        discountedPrice: 5130, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 10, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 321원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/34.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '베이커리 · 케이크 · 파이', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 34 },
            { name: '신상품', rank: 7 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '블랑제리코팡', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 35,
        name: '[블랑제리코팡] \n잠봉뵈르 샌드위치',
        des: '',
        price: 5300, //가격
        discountedPrice: 4920, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 7, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 246원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/35.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '베이커리 · 케이크 · 파이', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 35 },
            { name: '신상품', rank: 6 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '블랑제리코팡', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 36,
        name: '[블랑제리코팡] \n쌀 바게트',
        des: '',
        price: 5000, //가격
        discountedPrice: 4650, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 7, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 211원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/36.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '베이커리 · 케이크 · 파이', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 36 },
            { name: '신상품', rank: 5 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '블랑제리코팡', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 37,
        name: '[허니파머스] \n천연 스틱꿀 3종 아카시아, 야생화, 밤',
        des: '',
        price: 19200, //가격
        discountedPrice: 9600, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 50, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/37.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '잼 · 버터 · 꿀', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 37 },
            { name: '신상품', rank: 4 },
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
        bakeryId: 38,
        name: '[허니파머스] \n천연 스틱꿀&튜브꿀 혼합 6종 선물세트',
        des: '',
        price: 150000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 11,111원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/38.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '잼 · 버터 · 꿀', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 38 },
            { name: '신상품', rank: 3 },
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
        bakeryId: 39,
        name: '[나폴레옹] \n스폰지 케이크',
        des: '',
        price: 24500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 606원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/39.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '선물용 베이커리와 치즈', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 39 },
            { name: '신상품', rank: 2 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '나폴레옹베이커리', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        bakeryId: 40,
        name: '[야카] 약과 \n3종 6개입/8개입/12개입',
        des: '',
        price: 10000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu08/40.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '베이커리·치즈', // 대분류 (ex: 식품, 의류, 가전)
            sub: '선물용 베이커리와 치즈', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 40 },
            { name: '신상품', rank: 1 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '야카(YAKKA)', // 생산자
            packagingType: '', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
];
