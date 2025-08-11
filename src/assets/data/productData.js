export default [
    {
        id: 1,
        name: '[그리니팅] 진짜레몬 (80ml*5개입)',
        des: '100% 순수 레몬즙',
        price: 27400, // ✨ 가격
        discountedPrice: 20550, // ✨ 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 25, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 가격: 5,138원', // ✨ 그램당 가격 / 단위당 가격

        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/1/5/8/8805489004851_01.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '과일·채소', // 대분류 (ex: 육류·달걀)
            sub: '과일', // 중분류 (ex: 육류)
        },

        tags: [
            { name: '베스트', rank: 1 },
            // { name: '신상품', rank: 10 },
        ],

        // 상세정보
        details: {
            origin: '상세페이지 참고', // ✨ 원산지

            packagingType: '냉동', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: '현대카드 결제 시 10% 추가 할인', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '새벽배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '그리니팅', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 2,
        name: '[새벽시장] 수박 7kg (1통)',
        des: '폭염으로 인해 상품의 당도가 다소 떨어질 수 있습니다. 구매 후 당일 섭취 부탁드립니다. 품질관리를 위해 노력하겠습니다.',
        price: 57200, // ✨ 가격
        discountedPrice: null, // ✨ 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: null, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 817원', // ✨ 그램당 가격 / 단위당 가격

        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/9/7/2/2810000388279_01.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '과일·채소', // 대분류 (ex: 육류·달걀)
            sub: '채소', // 중분류 (ex: 육류)
        },

        tags: [
            { name: '베스트', rank: 2 },
            // { name: '신상품', rank: 11 },
        ],

        // 상세정보
        details: {
            origin: '상세페이지 참고', // ✨ 원산지

            packagingType: '냉동', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: '현대카드 결제 시 10% 추가 할인', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '새벽배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '찬솔농산', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 3,
        name: '[새벽시장] 불로초 감귤 (1.5kg)',
        des: null,
        price: 27200, // ✨ 가격
        discountedPrice: 24480, // ✨ 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 10, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,632원', // ✨ 그램당 가격 / 단위당 가격

        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/4/8/1/8806079995184_00.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '과일·채소', // 대분류 (ex: 육류·달걀)
            sub: '과일', // 중분류 (ex: 육류)
        },

        tags: [
            { name: '베스트', rank: 3 },
            // { name: '신상품', rank: 12 },
        ],

        // 상세정보
        details: {
            origin: '국내산', // ✨ 원산지

            packagingType: '냉장', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: '현대카드 결제 시 10% 추가 할인', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '택배배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '찬솔농산', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 4,
        name: '[암소한우] 한우 1등급 채끝스테이크 300g (냉장)',
        des: '도축장명 및 축산물 이력번호는 상품 패키지에 개별 표기되어있습니다.',
        price: 27200, // ✨ 가격
        discountedPrice: 24480, // ✨ 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 10, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,632원', // ✨ 그램당 가격 / 단위당 가격

        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/7/1/6/8809168569617_00.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '육류·달걀', // 대분류 (ex: 육류·달걀)
            sub: '육류', // 중분류 (ex: 육류)
        },

        tags: [
            { name: '베스트', rank: 4 },
            // { name: '신상품', rank: 13 },
        ],

        // 상세정보
        details: {
            origin: '국내산', // ✨ 원산지

            packagingType: '냉장', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: '현대카드 결제 시 10% 추가 할인', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '새벽배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '현대그린푸드(정육)', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 5,
        name: '[현대쌀집][백미4kg] 프리미엄 쌀',
        des: '수령 후 냉장보관 권장합니다. 쌀은 신선식품으로 수령 후 2주이내 품질관련 문의 가능합니다.',
        price: 33600, // ✨ 가격
        discountedPrice: null, // ✨ 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: null, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: null, // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/0/0/9/8809152871900_00.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '육류·달걀', // 대분류 (ex: 육류·달걀)
            sub: '육류', // 중분류 (ex: 육류)
        },

        tags: [
            { name: '베스트', rank: 5 },
            // { name: '신상품', rank: 14 },
        ],

        // 상세정보
        details: {
            origin: '국내산', // ✨ 원산지

            packagingType: '상온', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: 'null', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '보성특수농산', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 6,
        name: '[소바쿠] 쫄깃한 백메밀소바 532g',
        des: '수령 후 냉장보관 권장합니다. 쌀은 신선식품으로 수령 후 2주이내 품질관련 문의 가능합니다.',
        price: 9900, // ✨ 가격
        discountedPrice: null, // ✨ 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: null, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,861원', // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        thumbnailImage: '/images/product/product06.png',

        category: {
            main: '밥·국·면', // 대분류 (ex: 육류·달걀)
            sub: '면', // 중분류 (ex: 육류)
        },

        tags: [
            // { name: '베스트', rank: 10 },
            { name: '신상품', rank: 1 },
        ],

        // 상세정보
        details: {
            origin: '상세페이지 참고', // ✨ 원산지

            packagingType: '냉동', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '새벽배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '주식회사캐비아', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 7,
        name: '[경복궁BLACK] 한우 떡갈비 200g (냉동)',
        des: '수령 후 냉장보관 권장합니다. 쌀은 신선식품으로 수령 후 2주이내 품질관련 문의 가능합니다.',
        price: 9900, // ✨ 가격
        discountedPrice: null, // ✨ 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: null, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,861원', // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        thumbnailImage: '/images/product/product07.png',

        category: {
            main: '육류·달걀', // 대분류 (ex: 육류·달걀)
            sub: '육류', // 중분류 (ex: 육류)
        },

        tags: [
            // { name: '베스트', rank: 11 },
            { name: '신상품', rank: 2 },
        ],

        // 상세정보
        details: {
            origin: '상세페이지 참고', // ✨ 원산지

            packagingType: '냉동', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '택배배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '경복궁BLACK', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 8,
        name: '[상어알분식] 한입 쌀 떡볶이 860g (3~4인분)',
        des: '수령 후 냉장보관 권장합니다. 쌀은 신선식품으로 수령 후 2주이내 품질관련 문의 가능합니다.',
        price: 12900, // ✨ 가격
        discountedPrice: null, // ✨ 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: null, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,500원', // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        img: '/images/product/product08.png',

        category: {
            main: '육류·달걀', // 대분류 (ex: 육류·달걀)
            sub: '육류', // 중분류 (ex: 육류)
        },

        tags: [
            // { name: '베스트', rank: 12 },
            { name: '신상품', rank: 3 },
        ],

        // 상세정보
        details: {
            origin: '상세페이지 참고', // ✨ 원산지

            packagingType: '냉동', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '택배배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '주식회사캐비아', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        // https://tohome.thehyundai.com/front/pd/pdd/productDetail.do?slitmCd=S02006004336
        id: 9,
        name: '[새벽시장]천봉엑셀라 복숭아 5입',
        info: '복숭아 본연의 향긋한 향미와 핑크빛 과육',
        des: '딱딱이 복숭아입니다.',
        price: 32900, // ✨ 가격
        discountedPrice: 29610, // ✨ 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 10, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: null, // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/0/0/9/8809152871900_00.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '과일·채소', // 대분류 (ex: 육류·달걀)
            sub: '과일', // 중분류 (ex: 육류)
        },

        tags: [{ name: '제철과일', rank: 1 }],

        // 상세정보
        details: {
            origin: '국내산', // ✨ 원산지

            packagingType: '상온', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '택배배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '주식회사캐비아', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 10,
        name: '[주인환 농부]머스크 멜론, 2종',
        info: '달콤한 향과 맛, 부드러운 식감의 머스크 멜론',
        des: '딱딱이 복숭아입니다.',
        price: 28000, // ✨ 가격
        discountedPrice: null, // ✨ 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: null, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: null, // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/O/3/0/2/O02306090203_00.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '과일·채소', // 대분류 (ex: 육류·달걀)
            sub: '과일', // 중분류 (ex: 육류)
        },

        tags: [{ name: '제철과일', rank: 2 }],

        // 상세정보
        details: {
            origin: '국내산', // ✨ 원산지

            packagingType: '상온', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '브랜드 직송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '또또팜', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 11,
        name: '[새벽시장]후무사 자두 900g',
        info: '후숙 없이 신선할 때 즐기기 좋은 후무사 자두',
        des: '',
        price: 20300, // ✨ 가격
        discountedPrice: 18270, // ✨ 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 10, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 2,030원', // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/3/4/8/8806079687843_00.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '과일·채소', // 대분류 (ex: 육류·달걀)
            sub: '과일', // 중분류 (ex: 육류)
        },

        tags: [{ name: '제철과일', rank: 3 }],

        // 상세정보
        details: {
            origin: '국내산', // ✨ 원산지

            packagingType: '상온', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '브랜드 직송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '후르츠사계절', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 12,
        name: '[새벽시장] 샤인머스캣 포도 1송이 (640g 이상)',
        info: '알알이 꽉찬 달콤한 과즙의 샤인머스캣',
        des: '',
        price: 28000, // ✨ 가격
        discountedPrice: 21000, // ✨ 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 25, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 3,281원', // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/8/8/1/2810000550188_00.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '과일·채소', // 대분류 (ex: 육류·달걀)
            sub: '과일', // 중분류 (ex: 육류)
        },

        tags: [{ name: '제철과일', rank: 4 }],

        // 상세정보
        details: {
            origin: '국내산', // ✨ 원산지

            packagingType: '상온', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '브랜드 직송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '후르츠사계절', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 13,
        name: '[새벽시장] 수박 7kg (1통)',
        info: '시원하고 아삭한 과육과 풍부한 과즙의 달콤한 수박',
        des: '',
        price: 57200, // ✨ 가격
        discountedPrice: null, // ✨ 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: null, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 817원', // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/9/7/2/2810000388279_01.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '과일·채소', // 대분류 (ex: 육류·달걀)
            sub: '채소', // 중분류 (ex: 육류)
        },

        tags: [{ name: '제철과일', rank: 5 }],

        // 상세정보
        details: {
            origin: '국내산', // ✨ 원산지

            packagingType: '냉장', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '새벽배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '후르츠사계절', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 14,
        name: '[경복궁BLACK] 영양삼계탕 (냉동)',
        info: '몸에 좋은 한방 약재를 고아낸 삼계탕',
        des: '',
        price: 15000, // ✨ 가격
        discountedPrice: null, // ✨ 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: null, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,765원', // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/6/3/1/8809725760136_00.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '밥·국·면', // 대분류 (ex: 육류·달걀)
            sub: '국', // 중분류 (ex: 육류)
        },

        tags: [{ name: '여름보양식', rank: 1 }],

        // 상세정보
        details: {
            origin: '상세페이지 참고', // ✨ 원산지

            packagingType: '냉동', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '택배배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '경복궁BLACK', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 15,
        name: '[청해포구] 백점복 전복 선물세트',
        // info: '국내 1호 유기수산물(친환경) 인증을 받은 완도산 전복 선물세트입니다.',
        des: '',
        price: 82000, // ✨ 가격
        discountedPrice: null, // ✨ 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: null, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 8,200원', // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/4/0/5/S12304162504_00.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '생선·해산물·건어물', // 대분류 (ex: 육류·달걀)
            sub: '해산물', // 중분류 (ex: 육류)
        },

        tags: [{ name: '여름보양식', rank: 2 }],

        // 상세정보
        details: {
            origin: '국내산(완도)', // ✨ 원산지

            packagingType: '냉장', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '새벽배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '완도청해포구', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 16,
        name: '[청해포구] 백점복 전복 선물세트',
        // info: '국내 1호 유기수산물(친환경) 인증을 받은 완도산 전복 선물세트입니다.',
        des: '',
        price: 82000, // ✨ 가격
        discountedPrice: null, // ✨ 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: null, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 8,200원', // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/4/0/5/S12304162504_00.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '생선·해산물·건어물', // 대분류 (ex: 육류·달걀)
            sub: '해산물', // 중분류 (ex: 육류)
        },

        tags: [{ name: '여름보양식', rank: 3 }],

        // 상세정보
        details: {
            origin: '국내산(완도)', // ✨ 원산지

            packagingType: '냉장', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '새벽배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '완도청해포구', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 17,
        name: '[경복궁BLACK] 영양갈비탕 (냉동)',
        // info: '국내 1호 유기수산물(친환경) 인증을 받은 완도산 전복 선물세트입니다.',
        des: '1kg(2인분), 2kg(4인분), 3kg(6인분), 4kg(8인분), 5kg(10인분) 입니다. 고창 풍천장어 활어 손질 후 초벌 중량 600g 2kg 이상 주문시부터 무료 배송입니다.',
        price: 15000, // ✨ 가격
        discountedPrice: 55800, // ✨ 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: 10, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '', // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/2/6/3/8809725761362_01.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '밥·국·면', // 대분류 (ex: 육류·달걀)
            sub: '국', // 중분류 (ex: 육류)
        },

        tags: [{ name: '여름보양식', rank: 4 }],

        // 상세정보
        details: {
            origin: '국내산(완도)', // ✨ 원산지

            packagingType: '냉장', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '새벽배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '완도청해포구', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 18,
        name: '[압구정 예향] 정성 가득 보양 삼계탕',
        des: '',
        price: 18000, // ✨ 가격
        discountedPrice: 16200, // ✨ 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 10, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 900원', // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/4/6/1/8806079690164_00.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '밥·국·면', // 대분류 (ex: 육류·달걀)
            sub: '국', // 중분류 (ex: 육류)
        },

        tags: [{ name: '여름보양식', rank: 5 }],

        // 상세정보
        details: {
            origin: '국내산(완도)', // ✨ 원산지

            packagingType: '냉장', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '새벽배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '완도청해포구', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 19,
        name: '[새벽시장] 한입 감자 (700g)',
        des: '',
        price: 7100, // ✨ 가격
        discountedPrice: '', // ✨ 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,014원', // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/7/4/4/8806079111447_00.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '과일·채소', // 대분류 (ex: 육류·달걀)
            sub: '채소', // 중분류 (ex: 육류)
        },

        tags: [{ name: '오늘의레시피', rank: 1 }],

        // 상세정보
        details: {
            origin: '국내산(완도)', // ✨ 원산지

            packagingType: '냉장', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '새벽배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '완도청해포구', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 20,
        name: '[모니니] 엑스트라버진올리브유 스프레이 (200ml)',
        des: '',
        price: 7100, // ✨ 가격
        discountedPrice: '', // ✨ 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,014원', // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/7/4/4/8806079111447_00.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '과일·채소', // 대분류 (ex: 육류·달걀)
            sub: '채소', // 중분류 (ex: 육류)
        },

        tags: [{ name: '오늘의레시피', rank: 2 }],

        // 상세정보
        details: {
            origin: '국내산(완도)', // ✨ 원산지

            packagingType: '냉장', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '새벽배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '완도청해포구', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 21,
        name: '[새벽시장] 깐쪽파 90g',
        des: '',
        price: 7100, // ✨ 가격
        discountedPrice: '', // ✨ 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,014원', // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/7/4/4/8806079111447_00.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '과일·채소', // 대분류 (ex: 육류·달걀)
            sub: '채소', // 중분류 (ex: 육류)
        },

        tags: [{ name: '오늘의레시피', rank: 3 }],

        // 상세정보
        details: {
            origin: '국내산(완도)', // ✨ 원산지

            packagingType: '냉장', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '새벽배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '완도청해포구', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 22,
        name: '[새벽시장] 레몬 3~4입',
        des: '',
        price: 7100, // ✨ 가격
        discountedPrice: '', // ✨ 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,014원', // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/7/4/4/8806079111447_00.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '과일·채소', // 대분류 (ex: 육류·달걀)
            sub: '채소', // 중분류 (ex: 육류)
        },

        tags: [{ name: '오늘의레시피', rank: 4 }],

        // 상세정보
        details: {
            origin: '국내산(완도)', // ✨ 원산지

            packagingType: '냉장', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '새벽배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '완도청해포구', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
    {
        id: 23,
        name: '[백설] 오천년의 신비 명품 구운소금 (400g)',
        des: '',
        price: 7100, // ✨ 가격
        discountedPrice: '', // ✨ 할인된 가격
        isDiscounted: false, // 할인하면 true, 아니면 false
        discountRate: '', // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g당 1,014원', // ✨ 그램당 가격 / 단위당 가격
        // mainImage,
        thumbnailImage:
            'https://tohomeimage.thehyundai.com/PD/PDImages/S/7/4/4/8806079111447_00.jpg?RS=720x864', // 상품 썸네일 이미지 URL

        category: {
            main: '과일·채소', // 대분류 (ex: 육류·달걀)
            sub: '채소', // 중분류 (ex: 육류)
        },

        tags: [{ name: '오늘의레시피', rank: 5 }],

        // 상세정보
        details: {
            origin: '국내산(완도)', // ✨ 원산지

            packagingType: '냉장', // ✨ 포장타입 (ex냉장, 냉동, 상온)
            additionalDiscount: ' 0원', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '새벽배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송 or 택배배송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '완도청해포구', // ✨ 생산자
            importer: null, // ✨ 생산자, 수입품의 경우 수입자를 함께 표기

            originLaw: '농수산물의 원산지 표시 등에 관한 법률에 따름', // ✅ 원본: "농수산물의 원산지 표시 등에 관한 법률에 따른 원산지"

            expirationPolicy: '주문일 기준 소비기한이 2일 이상 남은 상품을 취급하고 있습니다.', // ✅ 원본: "제조연월일(포장일 또는 생산연도), 소비기한"

            itemName: '해당사항없음', // ✅ 원본: "품목 또는 명칭"

            gmoInfo: '해당사항없음', // ✅ 원본: "농산물 - 농수산물품질관리법상 유전자변형농산물 표시, 지리적 표시"

            importNotice: '해당사항없음', // ✅ 원본: "수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구"

            productContents: ['사과', '보관법 안내'], // ✅ 원본: "상품 구성"

            storageMethod: '냉장보관', // ✅ 원본: "보관방법 또는 취급방법"

            customerService: '현대식품관 to home 고객센터(1800-9549)', // ✅ 원본: "소비자상담 관련 전화번호"

            safetyNotice: '상품 상세 혹은 이미지 참조', // ✅ 원본: "식품 등의 표시·광고에 관한 법률에 따른 소비자 안전을 위한 주의사항"

            stock: 100, // 현재 남아있는 상품의 총 재고 수량

            quantity: 1,
        },
    },
];
