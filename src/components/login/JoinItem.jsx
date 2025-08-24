import { JoinItemStyle } from './style';

const JoinItem = () => {
    return (
        <JoinItemStyle>
            <div className="inner">
                <div className="section1">
                    <div className="toptxt">
                        <span>가입정보</span>
                        <div className="sub">
                            <p>*</p>
                            <p>표시는 반드시 입력하셔야 합니다</p>
                        </div>
                    </div>

                    <form action="#" method="post" name="form" className="form" id="join-form">
                        <table className="table-wrap">
                            <colgroup>
                                <col className="w1" />
                                <col className="w2" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor="userid">
                                            아이디 <p>*</p>
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="userid"
                                            id="userid"
                                            placeholder="예) 영문/숫자 조합 8~30자   ex)rere0811"
                                            title="아이디를 입력하세요"
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label htmlFor="userpassword">
                                            비밀번호 <p>*</p>
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="password" /* ← 주석은 이렇게 */
                                            name="userpassword"
                                            id="userpassword"
                                            placeholder="예) 영문/숫자/특수문자 3가지 이상 8~16자   ex)rere0811@"
                                            title="비밀번호를 입력하세요"
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label htmlFor="userpassword2">
                                            비밀번호 확인 <p>*</p>
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="password"
                                            name="userpassword2"
                                            id="userpassword2"
                                            placeholder="ex)rere0811@"
                                            title="비밀번호를 입력하세요"
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label htmlFor="username1">
                                            이름 <p>*</p>
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username1"
                                            placeholder="ex) 이지은"
                                            title="이름을 입력하세요"
                                            required
                                        />
                                    </td>
                                </tr>

                                {/* 이메일 */}
                                <tr>
                                    <td>
                                        <label htmlFor="emailLocal">
                                            이메일 <p>*</p>
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="emailLocal"
                                            id="emailLocal"
                                            placeholder="ex) rere0811"
                                            title="이메일을 입력하세요"
                                            required
                                        />
                                        @
                                        <select
                                            name="emailDomain"
                                            id="emailDomain"
                                            className="400"
                                            title="주소를 선택하세요"
                                            required
                                        >
                                            <option value="">========= 선 택 =========</option>
                                            <option value="naver.com">naver.com</option>
                                            <option value="daum.net">daum.net</option>
                                            <option value="google.com">google.com</option>
                                            <option value="nate.com">nate.com</option>
                                            <option value="icloud.com">icloud.com</option>
                                        </select>
                                    </td>
                                </tr>

                                {/* 전화번호 */}
                                <tr>
                                    <td>
                                        <label htmlFor="telPrefix">
                                            전화번호 <p>*</p>
                                        </label>
                                    </td>
                                    <td>
                                        <select
                                            name="telPrefix"
                                            id="telPrefix"
                                            className="400"
                                            title="번호를 선택하세요"
                                            required
                                        >
                                            <option value="">==== 선 택 ====</option>
                                            <option value="010">010</option>
                                            <option value="011">011</option>
                                            <option value="018">018</option>
                                            <option value="02">02</option>
                                            <option value="031">031</option>
                                            <option value="032">032</option>
                                            <option value="033">033</option>
                                            <option value="042">042</option>
                                            <option value="041">041</option>
                                            <option value="051">051</option>
                                            <option value="043">043</option>
                                            <option value="052">052</option>
                                            <option value="054">054</option>
                                            <option value="053">053</option>
                                            <option value="055">055</option>
                                            <option value="062">062</option>
                                            <option value="061">061</option>
                                            <option value="064">064</option>
                                            <option value="063">063</option>
                                        </select>

                                        <input
                                            type="text"
                                            name="telMid"
                                            id="telMid"
                                            placeholder="ex)1234"
                                            title="번호를 입력하세요"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="telEnd"
                                            id="telEnd"
                                            placeholder="ex)5678"
                                            title="번호를 입력하세요"
                                            required
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>

                <div className="section2">
                    <div className="bottomtxt">
                        <span>추가정보</span>
                    </div>
                    <form action="#" method="post" name="form" className="form">
                        <table className="table-wrap">
                            <colgroup>
                                <col className="w1" />
                                <col className="w2" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>성별</label>
                                    </td>
                                    <td>
                                        <div className="gender">
                                            <p>
                                                <button type="button">남성</button>
                                            </p>
                                            <p>
                                                <button type="button">여성</button>
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label>생년월일</label>
                                    </td>
                                    <td>
                                        <div className="birthday">
                                            <select
                                                name="year"
                                                id="year"
                                                className="200"
                                                title="년"
                                            >
                                                <option value="">년</option>
                                                <option value="2025">2025</option>
                                                <option value="2024">2024</option>
                                                {/* ... 필요 연도만 남기세요 ... */}
                                                <option value="1980">1980</option>
                                            </select>
                                            <span>년</span>

                                            <select
                                                name="month"
                                                id="month2"
                                                className="200"
                                                title="월"
                                            >
                                                <option value="">월</option>
                                                {Array.from({ length: 12 }, (_, i) => i + 1).map(
                                                    (m) => (
                                                        <option key={m} value={m}>
                                                            {m}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                            <span>월</span>

                                            <select
                                                name="date"
                                                id="date"
                                                className="200"
                                                title="일"
                                            >
                                                <option value="">일</option>
                                                {Array.from({ length: 31 }, (_, i) => i + 1).map(
                                                    (d) => (
                                                        <option key={d} value={d}>
                                                            {d}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                            <span>일</span>
                                        </div>
                                        <p>
                                            <button type="button">양력</button>
                                        </p>
                                        <p>
                                            <button type="button">음력</button>
                                        </p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label htmlFor="addr1">주소</label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="addr1"
                                            id="addr1"
                                            placeholder="ex)서울시 강남구 삼성동 "
                                            title="주소를 입력하세요"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="addr2"
                                            id="addr2"
                                            placeholder="상세주소를 입력하세요   ex)123-4번길 1층 "
                                            title="상세주소를 입력하세요"
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label htmlFor="recommendid">추천인 아이디</label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            placeholder="추천인 아이디를 입력하세요   ex)ezen1234"
                                            name="recommendid"
                                            id="recommendid"
                                            className="w410"
                                            title="추천인 아이디를 입력하세요"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </JoinItemStyle>
    );
};

export default JoinItem;
