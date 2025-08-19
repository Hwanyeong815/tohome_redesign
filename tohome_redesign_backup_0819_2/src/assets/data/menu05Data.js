export default [
    {
        riceId: 1,
        name: '[엄지네포장마차] \n강릉엄지네 꼬막무침 333g',
        des: '밥이 포함되어 있지 않으니 구매시 참고해주세요',
        price: 25000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 7,508원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/01.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '밥·볶음밥·도시락', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [{ name: '베스트', rank: 12 }],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '엄지네포장마차(여수올림)', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 2,
        name: '[압구정 예향] \n찰밥 200gX2개 (냉동)',
        des: '',
        price: 13000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 3,250원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/02.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '밥·볶음밥·도시락', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '예향', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 3,
        name: '[햇반] \n솥반 전복버터영양밥 200g',
        des: '',
        price: 5480, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/03.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '밥·볶음밥·도시락', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '씨제이', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 4,
        name: '[햇반컵반] \n스팸마요덮밥 219g',
        des: '',
        price: 4980, //가격
        discountedPrice: 3640, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 26, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/04.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '밥·볶음밥·도시락', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '씨제이', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 5,
        name: '[원테이블] \n한우 잡채볶음밥 450g',
        des: '',
        price: 5500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,222원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/05.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '밥·볶음밥·도시락', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '현대그린푸드(원테이블)', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 6,
        name: '[하남돼지집] \n차돌 된장술밥 250g (냉동)',
        des: '',
        price: 6000, //가격
        discountedPrice: 5200, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 13, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/06.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '밥·볶음밥·도시락', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '주식회사 홈이디어', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 7,
        name: '[설성목장] \n한우불고기볶음밥 920g (4인분)',
        des: '',
        price: 11800, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/07.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '밥·볶음밥·도시락', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '국내산', // 원산지
            manufacturer: '설성푸드 주식회사', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 8,
        name: '[설성목장] \n한우불고기김밥 240g',
        des: '',
        price: 3800, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/08.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '밥·볶음밥·도시락', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '설성푸드 주식회사', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 9,
        name: '[압구정 예향] \n5시간 우려낸 정성 가득 보양 삼계탕',
        des: '',
        price: 18000, //가격
        discountedPrice: 16200, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 10, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 900원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/09.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '국·탕·찌개', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [{ name: '베스트' }],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '예향', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 10,
        name: '[압구정 예향] \n깊은 맛이 느껴지는 육개장 (냉동)',
        des: '푹 우려낸 육수와 건더기의 깊은 맛을 느낄 수 있는 예향의 육개장입니다',
        price: 8000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,231원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/10.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '국·탕·찌개', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '예향', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 11,
        name: '[반찬가게 슈퍼키친] \n찹쌀가득 닭다리백숙 900g',
        des: '',
        price: 14500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,611원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/11.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '국·탕·찌개', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '슈퍼키친', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 12,
        name: '[압구정 예향] \n국산들개가루 버섯들깨탕 (냉동)',
        des: '걸쭉한 국물이 매력적인 버섯들깨탕입니다',
        price: 8000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,231원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/12.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '국·탕·찌개', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [{ name: '베스트', rank: 36 }],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '예향', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 13,
        name: '[압구정 예향] \n부드러운 순두부 황태국',
        des: '',
        price: 7500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,154원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/13.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '국·탕·찌개', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '예향', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 14,
        name: '[벽제갈비] \n한우곰탕 500g (냉동)',
        des: '',
        price: 17000, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 3,400원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/14.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '국·탕·찌개', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '국내산', // 원산지
            manufacturer: '(주)벽제갈비 하남지점', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 15,
        name: '[존쿡델리미트] \n킬바사 부대찌개 800g',
        des: '',
        price: 9780, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,223원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/15.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '국·탕·찌개', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '존쿡델리미트(에스푸드)', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 16,
        name: '[삼원가든] \n소갈비찜 700g',
        des: '',
        price: 30500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 4,357원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/16.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '국·탕·찌개', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '주식회사캐비아', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 17,
        name: '[명인명촌] \n강희탁 수연소면(우리밀) 200g',
        des: '',
        price: 7400, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 3,700원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/17.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '면·스파게티·국수', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '명인명촌', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 18,
        name: '[파라디] \n들기름 타레 소바 274g',
        des: '',
        price: 10900, //가격
        discountedPrice: 8720, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 20, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 3,182원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/18.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '면·스파게티·국수', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '파라디', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 19,
        name: '[효성] \n부산어묵 유부우동전골 710g',
        des: '',
        price: 12730, //가격
        discountedPrice: 11600, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 8, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/19.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '면·스파게티·국수', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '효성앤에프', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 20,
        name: '[뽀모] \n토마토 라구소스(다짐육) 190g',
        des: '',
        price: 10500, //가격
        discountedPrice: 8920, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 15, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/20.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '면·스파게티·국수', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '뽀모', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 21,
        name: '[소바쿠] \n쫄깃한 백메밀소바 532g',
        des: '',
        price: 9900, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,861원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/21.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '면·스파게티·국수', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [{ name: '신상품', rank: 31 }],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '주식회사캐비아', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 22,
        name: '[데체코] \n스파게티니 500g',
        des: '',
        price: 7700, //가격
        discountedPrice: 5940, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 22, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,1188원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/22.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '면·스파게티·국수', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: 'SEE21(씨21)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 23,
        name: '[CJ] \n가쓰오우동 933.2g',
        des: '',
        price: 9480, //가격
        discountedPrice: 8980, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 5, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/23.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '면·스파게티·국수', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '씨제이', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 24,
        name: '[농심] \n누들핏 육개장 사발면 맛',
        des: '',
        price: 1550, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/24.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '면·스파게티·국수', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '농심(경인)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 25,
        name: '[햇반] \n발아현미밥 작은공기 130gX3',
        des: '',
        price: 6180, //가격
        discountedPrice: 3460, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 44, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 887원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/25.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '라면·햇반·즉석밥', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '씨제이', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 26,
        name: '[농심] \n신라면 멀티팩 120gX5',
        des: '',
        price: 4900, //가격
        discountedPrice: 4500, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 8, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 750원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/26.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '라면·햇반·즉석밥', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '농심(경인)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 27,
        name: '[햇반] \n작은공기 130g',
        des: '',
        price: 1700, //가격
        discountedPrice: 1100, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 35, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 846원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/27.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '라면·햇반·즉석밥', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [{ name: '베스트', rank: 12 }],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '씨제이', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 28,
        name: '[농심] \n육개장 사발면 86g',
        des: '',
        price: 1030, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 120원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/28.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '라면·햇반·즉석밥', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '농심(경인)', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 29,
        name: '[햇반] \n파로통곡물밥 190gX4',
        des: '',
        price: 14980, //가격
        discountedPrice: 10950, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 26, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/29.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '라면·햇반·즉석밥', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [{ name: '신상품', rank: 25 }],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '씨제이', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 30,
        name: '[오뚜기] \n진라면 순한맛 120gX5',
        des: '',
        price: 4280, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 713원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/30.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '라면·햇반·즉석밥', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '오뚜기', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 31,
        name: '[팔도] \n비빔면 130gX5',
        des: '',
        price: 5750, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 885원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/31.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '라면·햇반·즉석밥', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '팔도', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 32,
        name: '[햇반] \n솥반 버섯영양방 200g',
        des: '',
        price: 5280, //가격
        discountedPrice: 2720, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 48, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '10g당 136원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/32.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '라면·햇반·즉석밥', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '씨제이', // 생산자
            packagingType: '상온', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 33,
        name: '[압구정 예향] \n포테이토 에그 샐러드',
        des: '',
        price: 6500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 3,250원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/33.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '샐러드·저칼로리식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '예향', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 34,
        name: '[풀무원] \n한끼 계란연두부 2입 236g',
        des: '',
        price: 3280, //가격
        discountedPrice: 2780, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 15, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,178원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/34.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '샐러드·저칼로리식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '풀무원식품(주)생식품', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 35,
        name: '[풀무원] \n생순도토리묵 300gX2입',
        des: '',
        price: 3500, //가격
        discountedPrice: 2970, // 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 15, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 495원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/35.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '샐러드·저칼로리식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '풀무원식품(주)생식품', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 36,
        name: '[한성] \n실곤약 200g',
        des: '',
        price: 1280, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 640원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/36.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '샐러드·저칼로리식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '한성기업', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 37,
        name: '[풀무원] \n식물성 지구식단 크리스피 두부스틱 400g',
        des: '',
        price: 7980, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,995원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/37.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '샐러드·저칼로리식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '풀무원식품(주)생식품', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '택배배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 38,
        name: '[메디쏠라] \n마녀스프(냉동)',
        des: '',
        price: 6900, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/38.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '샐러드·저칼로리식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '메디쏠라 주식회사', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 39,
        name: '[압구정 예향] \n연근 흑임자 소스 샐러드',
        des: '',
        price: 6500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 4,333원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/39.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '샐러드·저칼로리식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '예향', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 40,
        name: '[압구정 예향] \n단호박 견과 샐러드',
        des: '',
        price: 6500, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 3,250원', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/40.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '샐러드·저칼로리식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '예향', // 생산자
            packagingType: '냉장', // 포장타입 (ex냉장, 냉동)
            deliveryType: '새벽배송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 41,
        name: '[메디쏠라] \n프로틴3 새우두부 함박스테이트 100g',
        des: '',
        price: 4300, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/41.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '샐러드·저칼로리식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '메디쏠라 주식회사', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
    {
        riceId: 42,
        name: '[메디쏠라] \n프로틴3 치킨두부 함박스테이크 100g',
        des: '',
        price: 4300, //가격
        discountedPrice: '', // 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // 그램당 가격 / 단위당 가격
        thumbnailImage: '/images/menu05/42.jpg', // 상품 썸네일 이미지 URL
        category: {
            main: '밥·국·면', // 대분류 (ex: 식품, 의류, 가전)
            sub: '샐러드·저칼로리식', // 중분류 (ex: 과일, 채소, 수산물)
        },
        tags: [''],

        details: {
            origin: '상세페이지 참고', // 원산지
            manufacturer: '메디쏠라 주식회사', // 생산자
            packagingType: '냉동', // 포장타입 (ex냉장, 냉동)
            deliveryType: '브랜드직송', // 배송형태 (ex:새벽배송만 있으면 '새벽배송', 택배배송도 같이있으면 '택배배송' or '브랜드직송')
            stock: '100', // 현재 남아있는 상품의 총 재고 수량 - default
            quantity: 1, // 수량추가 - default
        },
    },
];
