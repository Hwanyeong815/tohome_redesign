export default [
    {
        snackId: 1,
        name: '[만전식품] \n후라잉칩 블랙 명인 찹쌀 김부각 70g',
        price: 9000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 1,286원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/01.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '스낵 · 쿠키류', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 1 },
            { name: '신상품', rank: 40 },
        ],
        details: {
            origin: '상세 및 이미지 참조', // 원산지
            manufacturer: '만전식품(주)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 2,
        name: '[만전식품] \n후라잉칩 블랙 명인 찹쌀 연근부각 70g',
        price: 9000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 1,286원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/02.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '스낵 · 쿠키류', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 2 },
            { name: '신상품', rank: 39 },
        ],
        details: {
            origin: '상세 및 이미지 참조', // 원산지
            manufacturer: '만전식품(주)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 3,
        name: '[덴로쿠] \n오이리 스낵 믹스 294g',
        price: 15000, //가격
        discountedPrice: 13400, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 10, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 4,558원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/03.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '스낵 · 쿠키류', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 3 },
            { name: '신상품', rank: 38 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: 'TDF코리아', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 4,
        name: '[혼다] \n소프트 센베이 콘포타쥬맛',
        price: 5900, //가격
        discountedPrice: 5500, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 6, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/04.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '스낵 · 쿠키류', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 4 },
            { name: '신상품', rank: 37 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: 'TDF코리아', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 5,
        name: '[태극당] \n옛날 전병 4종',
        price: 16000, //가격
        discountedPrice: 14400, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 10, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 6,667원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/05.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '떡 · 전통간식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 5 },
            { name: '신상품', rank: 36 },
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
        snackId: 6,
        name: '[현대쌀집] \n[가공] 조청 현미강정 150g',
        price: 9700, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 6,467원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/06.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '떡 · 전통간식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 6 },
            { name: '신상품', rank: 35 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '보성특수농산', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 7,
        name: '[고구마농장] \n반건조 스위트 고구마 70g',
        price: 3000, //가격
        discountedPrice: 2550, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 15, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 364원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/07.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '떡 · 전통간식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 7 },
            { name: '신상품', rank: 34 },
        ],
        details: {
            origin: '국내산', // 원산지
            manufacturer: '가든클래식스', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 8,
        name: '[명인명촌] \n이원복 옥수수콘 100g',
        price: 4000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 400원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/08.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '떡 · 전통간식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 8 },
            { name: '신상품', rank: 33 },
        ],
        details: {
            origin: '국내산', // 원산지
            manufacturer: '명인명촌', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 9,
        name: '[PNB풍년제과] \n옛날 전병 4종',
        price: 9000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 346원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/09.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '떡 · 전통간식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 9 },
            { name: '신상품', rank: 32 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: 'PNB풍년제과', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 10,
        name: '[삼립] \n누네띠네 카라멜 크림치즈 120g',
        price: 3300, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/10.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '초콜릿 · 캔디 · 젤리', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 10 },
            { name: '신상품', rank: 31 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '삼립식품(주)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 11,
        name: '[쁘띠첼] \n워터젤리 포도 130ml',
        des: '',
        price: 1480, //가격
        discountedPrice: 1090, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 26, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/11.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '초콜릿 · 캔디 · 젤리', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 11 },
            { name: '신상품', rank: 30 },
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
        snackId: 12,
        name: '[쁘띠첼] \n워터젤리 오렌지 130ml',
        des: '',
        price: 1480, //가격
        discountedPrice: 1090, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 26, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/12.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '초콜릿 · 캔디 · 젤리', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 12 },
            { name: '신상품', rank: 29 },
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
        snackId: 13,
        name: '[쁘띠첼] \n요거젤리딸기 210g',
        des: '',
        price: 2800, //가격
        discountedPrice: 2190, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 21, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/13.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '초콜릿 · 캔디 · 젤리', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 13 },
            { name: '신상품', rank: 28 },
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
        snackId: 14,
        name: '[폴바셋] \n우유모나카 3개입 420ml',
        des: '구매 시 제조일 24.12.04 제품으로 배송해드립니다.',
        price: 13500, //가격
        discountedPrice: 12150, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 10, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10ml당 289원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/14.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '아이스크림', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 14 },
            { name: '신상품', rank: 27 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '폴바셋(D)', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 15,
        name: '[태극당] \n초코 모나카(5개입)',
        des: '',
        price: 16000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100ml당 5,333원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/15.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '아이스크림', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 15 },
            { name: '신상품', rank: 26 },
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
        snackId: 16,
        name: '[명인명촌] \n아이스크림(우유) 100ml',
        des: '최소 2개이상 구매 가능합니다.',
        price: 5500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100ml당 5,500원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/16.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '아이스크림', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 16 },
            { name: '신상품', rank: 25 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '명인명촌', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 17,
        name: '[이룸푸드] \n냉동 망고 스틱 5개입 50g x 5개',
        des: '',
        price: 6500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/17.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '아이스크림', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 17 },
            { name: '신상품', rank: 24 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '이룸푸드시스템', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 18,
        name: '[팻위치] \n브라우니 6구 (4종)',
        des: '',
        price: 28500, //가격
        discountedPrice: 25080, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 12, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/18.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '스낵 · 쿠키류', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 18 },
            { name: '신상품', rank: 23 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '팻위치(온)', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 19,
        name: '[팻위치] \n브라우니 뉴욕맵 에디션 12구',
        des: '',
        price: 55500, //가격
        discountedPrice: 49950, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 10, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/19.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '스낵 · 쿠키류', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 19 },
            { name: '신상품', rank: 22 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '팻위치(온)', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 20,
        name: '[쎄모아] \n초코곰 마시멜로 920g',
        des: '소비기한 임박(25.9.30) 상품입니다.',
        price: 84500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/20.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '스낵 · 쿠키류', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 20 },
            { name: '신상품', rank: 21 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '쎄모아', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 21,
        name: '[리소케이크] \n단호박 카스텔라 인절미 & 수수팥경단 (3종 택1)',
        des: '',
        price: 63000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/21.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '떡 · 전통간식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 21 },
            { name: '신상품', rank: 20 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '리소케이크', // 생산자
            packagingType: '', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 22,
        name: '[리소케이크] \n곶감단지 (3종 택1)',
        des: '',
        price: 59000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/22.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '떡 · 전통간식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 22 },
            { name: '신상품', rank: 19 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '리소케이크', // 생산자
            packagingType: '', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 23,
        name: '[리소케이크] \n송편구절판 990g',
        des: '한 박스당 90g x 5개입으로 구성되어 있습니다.',
        price: 16200, //가격
        discountedPrice: 13500, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 16, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/23.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '떡 · 전통간식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 23 },
            { name: '신상품', rank: 18 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '주식회사 홈이디어', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 24,
        name: '[떡편] \n우유 백설기 450g x 2박스',
        des: '한 박스당 90g x 5개입으로 구성되어 있습니다.',
        price: 16200, //가격
        discountedPrice: 13500, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 16, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/24.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '떡 · 전통간식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 24 },
            { name: '신상품', rank: 17 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '주식회사 홈이디어', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 25,
        name: '[쁘띠첼] \n과일젤리 복숭아 90g*3',
        des: '',
        price: 16200, //가격
        discountedPrice: 13500, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 16, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/25.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '초콜릿 · 캔디 · 젤리', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 25 },
            { name: '신상품', rank: 16 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '주식회사 홈이디어', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 26,
        name: '[카토] \n카토 시오 토마토 아메 55g',
        des: '',
        price: 2400, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/26.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '초콜릿 · 캔디 · 젤리', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 26 },
            { name: '신상품', rank: 15 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '삼경아이', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 27,
        name: '[마요라] \n코피코커피맛캔디 블리스터 32g',
        des: '',
        price: 1000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/27.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '초콜릿 · 캔디 · 젤리', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 27 },
            { name: '신상품', rank: 14 },
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
        snackId: 28,
        name: '[이룸푸드] \n냉동 파인애플 스틱 5개입 50g x 5개',
        des: '',
        price: 6900, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/28.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '아이스크림', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 28 },
            { name: '신상품', rank: 13 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '이룸푸드시스템', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 29,
        name: '[잇츠리얼] \n하루 건강견과 엑설런트 20g*10입',
        des: '*소비기한 25년 10월 30일까지 입니다.',
        price: 15000, //가격
        discountedPrice: 7500, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 50, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/29.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '스낵 · 쿠키류', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 29 },
            { name: '신상품', rank: 12 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '잇츠리얼', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 30,
        name: '[쿤브라더스] \n마스쿠키 300g',
        des: '',
        price: 12000, //가격
        discountedPrice: 10410, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 13, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/30.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '스낵 · 쿠키류', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 30 },
            { name: '신상품', rank: 11 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '천하코퍼레이션(주)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 31,
        name: '[자케브로사드] \n미니 브라우니 150g',
        des: '',
        price: 4000, //가격
        discountedPrice: 3500, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 12, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 233원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/31.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '스낵 · 쿠키류', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 31 },
            { name: '신상품', rank: 10 },
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
        snackId: 32,
        name: '[라메르풀라르] \n소박스 쿠키 7종',
        des: '',
        price: 4500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/32.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '스낵 · 쿠키류', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 32 },
            { name: '신상품', rank: 9 },
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
        snackId: 33,
        name: '[올라] \n프리미엄 완숙 건망고 80g',
        des: '',
        price: 4900, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/33.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '스낵 · 쿠키류', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 33 },
            { name: '신상품', rank: 8 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '비즈니어코퍼레이션(주)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 34,
        name: '[유밀가] \n호두정과 선물세트 720g',
        des: '',
        price: 85900, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/34.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '떡 · 전통간식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 34 },
            { name: '신상품', rank: 7 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '주식회사 온고잉', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 35,
        name: '[유밀가] \n도라지정과 선물세트 240g (보자기 포장 옵션 선택)',
        des: '',
        price: 54900, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/35.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '떡 · 전통간식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 35 },
            { name: '신상품', rank: 6 },
        ],
        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '주식회사 온고잉', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 36,
        name: '[지리산황치마을] \n유기가공 누른당 바사삭 누룽지 5종 (택1)',
        des: '',
        price: 2000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/36.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '떡 · 전통간식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 36 },
            { name: '신상품', rank: 5 },
        ],
        details: {
            origin: '국산', // 원산지
            manufacturer: '지리산황치마을 영농조합법인', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 37,
        name: '[츄파춥스] \n골프공 롱박스 화이트박스 (4구+볼마커)',
        des: '',
        price: 32000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/37.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '초콜릿 · 캔디 · 젤리', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 37 },
            { name: '신상품', rank: 4 },
        ],
        details: {
            origin: '국산', // 원산지
            manufacturer: '엑스존', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 38,
        name: '[명인명촌] \n강혜정 쌀조청 캐러멜 60g',
        des: '',
        price: 12000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/38.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '초콜릿 · 캔디 · 젤리', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 38 },
            { name: '신상품', rank: 3 },
        ],
        details: {
            origin: '상세페이지 참고 ', // 원산지
            manufacturer: '명인명촌', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 39,
        name: '[DMZ드림푸드] \n알콩이 초콜릿 선물세트 90g×3',
        des: '',
        price: 21000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/39.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '초콜릿 · 캔디 · 젤리', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 39 },
            { name: '신상품', rank: 2 },
        ],
        details: {
            origin: '상세페이지 참고 ', // 원산지
            manufacturer: '농업회사법인디엠제트드림푸드주식회사', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        snackId: 40,
        name: '[DMZ드림푸드] \n콩초콜릿 삼각 선물세트 320g',
        des: '콩초콜릿 120g×2개, 40g×2개로 구성되어 있습니다.',
        price: 37000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu09/40.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '과자·초콜릿·캔디', // 대분류 (ex: 식품, 의류, 가전)
            sub: '초콜릿 · 캔디 · 젤리', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [
            { name: '베스트', rank: 40 },
            { name: '신상품', rank: 1 },
        ],
        details: {
            origin: '대한민국', // 원산지
            manufacturer: '농업회사법인디엠제트드림푸드주식회사', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: 100, // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
];
