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

                    <form action="#" method="post" name="form" class="form">
                        <table class="table-wrap">
                            <colgroup>
                                <col class="w1" />
                                <col class="w2" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>
                                        <label for="userid">
                                            아이디 <p>*</p>
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type=""
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
                                        <label for="userpassword">
                                            비밀번호 <p>*</p>
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type=""
                                            name="userpassword"
                                            id="userpassword"
                                            placeholder="예) 영문/숫자/특별문자 3가지 이상 조합 8~16자   ex)rere0811@"
                                            title="비밀번호를 입력하세요"
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="userpassword2">
                                            비밀번호 확인 <p>*</p>
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type=""
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
                                        <label for="username">
                                            이름 <p>*</p>
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type=""
                                            name="username"
                                            id="username"
                                            placeholder="ex) 이지은"
                                            title="이름을 입력하세요"
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="email">
                                            이메일 <p>*</p>
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type=""
                                            name="email"
                                            id="email"
                                            placeholder="example@eample.com   ex)rere0811@google.com"
                                            title="이메일을 입력하세요"
                                            required
                                        />
                                        @
                                        <select
                                            name="email"
                                            id="email"
                                            class="400"
                                            title="주소를 선택하세요"
                                        >
                                            <option value="">========= 선 택 =========</option>
                                            <option value="네이버">naver.com</option>
                                            <option value="다음">daum.net</option>
                                            <option value="구글">google.com</option>
                                            <option value="네이트">nate.com</option>
                                            <option value="애플">icloud.com</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="phonenumber">
                                            전화번호 <p>*</p>
                                        </label>
                                    </td>
                                    <td>
                                        <select
                                            name="phonenumber"
                                            id="phonenumber"
                                            class="400"
                                            title="번호를 선택하세요"
                                        >
                                            <option value="">==== 선 택 ====</option>
                                            <option value="010">010</option>
                                            <option value="011">011</option>
                                            <option value="018">018</option>
                                            <option value="서울">02</option>
                                            <option value="경기">031</option>
                                            <option value="인천">032</option>
                                            <option value="강원">033</option>
                                            <option value="대전">042</option>
                                            <option value="충남">041</option>
                                            <option value="부산">051</option>
                                            <option value="충북">043</option>
                                            <option value="울산">052</option>
                                            <option value="경북">054</option>
                                            <option value="대구">053</option>
                                            <option value="경남">055</option>
                                            <option value="광주">062</option>
                                            <option value="전남">061</option>
                                            <option value="제주">064</option>
                                            <option value="전북">063</option>
                                        </select>
                                        <input
                                            type=""
                                            name="email"
                                            id="email"
                                            placeholder="ex)1234"
                                            title="번호를 입력하세요"
                                            required
                                        />
                                        <input
                                            type=""
                                            name="email"
                                            id="email"
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
                    <form action="#" method="post" name="form" class="form">
                        <table class="table-wrap">
                            <colgroup>
                                <col class="w1" />
                                <col class="w2" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>
                                        <label for="address">성별</label>
                                    </td>
                                    <td>
                                        <div className="gender">
                                            <p>
                                                <button>남성</button>
                                            </p>
                                            <p>
                                                <button>여성</button>
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="address">생년월일</label>
                                    </td>
                                    <td>
                                        <div className="birthday">
                                            <select name="month" id="month" class="200" title="월">
                                                <option value="">년</option>
                                                <option value="1">2025</option>
                                                <option value="2">2024</option>
                                                <option value="3">2023</option>
                                                <option value="4">2022</option>
                                                <option value="5">2021</option>
                                                <option value="6">2020</option>
                                                <option value="7">2019</option>
                                                <option value="8">2018</option>
                                                <option value="9">2017</option>
                                                <option value="10">2016</option>
                                                <option value="11">2015</option>
                                                <option value="12">2014</option>
                                                <option value="12">2013</option>
                                                <option value="12">2012</option>
                                                <option value="12">2011</option>
                                                <option value="12">2010</option>
                                                <option value="12">2009</option>
                                                <option value="12">2008</option>
                                                <option value="12">2007</option>
                                                <option value="12">2006</option>
                                                <option value="12">2005</option>
                                                <option value="12">2004</option>
                                                <option value="12">2003</option>
                                                <option value="12">2002</option>
                                                <option value="12">2001</option>
                                                <option value="12">2000</option>
                                                <option value="12">1999</option>
                                                <option value="12">1998</option>
                                                <option value="12">1997</option>
                                                <option value="12">1996</option>
                                                <option value="12">1995</option>
                                                <option value="12">1994</option>
                                                <option value="12">1993</option>
                                                <option value="12">1992</option>
                                                <option value="12">1991</option>
                                                <option value="12">1990</option>
                                                <option value="12">1989</option>
                                                <option value="12">1988</option>
                                                <option value="12">1987</option>
                                                <option value="12">1986</option>
                                                <option value="12">1985</option>
                                                <option value="12">1984</option>
                                                <option value="12">1983</option>
                                                <option value="12">1982</option>
                                                <option value="12">1981</option>
                                                <option value="12">1980</option>
                                            </select>
                                            <span>년</span>

                                            <select name="month" id="month" class="200" title="월">
                                                <option value="">월</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>
                                            <span>월</span>
                                            <select name="date" id="date" class="200" title="일">
                                                <option value="">일</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                            </select>
                                            <span>일</span>
                                        </div>
                                        <p>
                                            <button>양력</button>
                                        </p>
                                        <p>
                                            <button>음력</button>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="address">주소</label>
                                    </td>
                                    <td>
                                        <input
                                            type=""
                                            name="email"
                                            id="email"
                                            placeholder="ex)서울시 강남구 삼성동 "
                                            title="주소를 입력하세요"
                                            required
                                        />
                                        <input
                                            type=""
                                            name="email"
                                            id="email"
                                            placeholder=" 상세주소를 입력하세요   ex)123-4번길 1층 "
                                            title="상세주소를 입력하세요"
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="recommendid">추천인 아이디</label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            placeholder="추천인 아이디를 입력하세요   ex)ezen1234"
                                            name="username"
                                            id="username"
                                            class="w410"
                                            title="추천인 아이디를 입력하세요"
                                            required
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>

                <div className="joinbtn">
                    <p>
                        <button type="submit">가입하기</button>
                    </p>
                </div>
            </div>
        </JoinItemStyle>
    );
};

export default JoinItem;
