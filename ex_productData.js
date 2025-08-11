// productData.js (상품 데이터 파일 - 주문 순서에 맞춘 주석 포함)

export const productData1 = [
    {
        id: 1,
        // link:,
        name: '친환경 사과 1kg', // ✨ 상품명
        price: 58500, // ✨ 가격
        discountedPrice: 6900, // ✨ 할인된 가격
        isDiscounted: true, // 할인하면 true, 아니면 false
        discountRate: 22, // (number 타입, 22% 할인이라면 22)
        pricePerUnit: '100g 당 731원', // ✨ 그램당 가격 / 단위당 가격

        thumbnailImage: 'https://cdn.example.com/products/1/thumb.jpg', // 상품 썸네일 이미지 URL
        mainImage: 'https://cdn.example.com/products/1/main.jpg', // 상품 메인 이미지 URL

        category: {
            main: '식품', // 대분류 (ex: 식품, 의류, 가전)
            sub: '과일', // 중분류 (ex: 과일, 채소, 수산물)
        },

        tags: [
            { name: '베스트', rank: 1 },
            { name: '신상품', rank: 5 },
        ],

        // 상세정보
        details: {
            origin: '국내산', // ✨ 원산지

            packagingType: '냉장', // ✨ 포장타입 (ex냉장, 냉동)
            additionalDiscount: '현대카드 결제 시 10% 추가 할인', // ✨ 추가 혜택가 (ex:혜택보기)
            deliveryType: '새벽배송', // ✨ 배송형태 (ex:새벽배송 or 브랜드 직송)

            barcode: '8801234567890', // ✨ 바코드 정보
            size: '지름 약 7~8cm', // ✨ 크기(cm)
            unitWeight: '1kg', // ✨ 포장단위별 내용물의 용량(중량), 수량, 크기

            manufacturer: '00농원', // ✨ 생산자
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

            quantity: 1, // 수량추가
        },
    },
];
