import React, { Fragment, Component } from "react";
import { compose } from "ramda";

import withI18n from '@hocs/I18nHocs';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

import { ImageViewer, CTitle } from '@components/common';
import { showImagePreviews } from '@utils/WebUtils';

const images = {
    table2: require('@assets/images/activity-rule/img_t&c.png'),
};
class ActivityRulesPage extends Component {
    handleZoomImage = (index) => {
        const arr = Object.values(images).map(i => ({ src: i.default }))
        showImagePreviews(arr, { index: index });
    };

    _renderContent = () => {
        const { classes } = this.props;
        return (
            <Fragment >

                <div className={classes.block}>

                    <div className={classes.subTitle}>
                        1.  Tên chương trình khuyến mại:
                        <span className={classes.title}> “THAY NHỚT CASTROL – SĂN NGAY XẾ XỊN”.</span>
                    </div>
                    <div className={classes.subTitle}>
                        2.  Thời gian khuyến mại:
                        <span className={classes.bold}> 0h00 ngày 15/09/2023</span> đến
                        <span className={classes.bold}> 23h59 ngày 31/01/2024</span>
                    </div>
                    <div className={classes.subTitle}>
                        3.   Địa bàn (phạm vi) khuyến mại:
                        <span className={classes.bold}> Toàn quốc</span>
                    </div>
                    <div className={classes.subTitle}>
                        4.  Hàng hóa, dịch vụ khuyến mại: Các sản phẩm thương hiệu Castrol POWER 1, POWER 1 ULTIMATE, Activ, Activ Vistra có nhãn khuyến mãi của chương trình.
                    </div>

                    <div className={classes.subTitle}>
                        <span className={classes.bold}> 5. Hình thức khuyến mại: </span>
                        Hình thức mang tính may rủi (Quay số xác định trúng thưởng)
                    </div>
                    <div className={classes.subTitle}>
                        <span className={classes.bold}>6. Khách hàng của chương trình khuyến mại </span>
                        (đối tượng hưởng khuyến mại): Khách hàng có quốc tịch Việt Nam từ 18 tuổi trở lên, mua sản phẩm khuyến mại và tham gia chương trình trong thời gian khuyến mại.
                    </div>
                    <div className={classes.block}>
                        <span className={classes.note}>Lưu ý:</span>
                        {" "} Nhân viên Công ty TNHH Castrol BP Petco; Các nhà phân phối của Công ty TNHH Castrol BP Petco và nhân viên của họ; Khách hàng của các nhà phân phối của Công ty TNHH Castrol BP Petco (mua sản phẩm Castrol từ những nhà phân phối này) và nhân viên của họ; Các nhà cung cấp dịch vụ (bao gồm các công ty quảng cáo, nhà cung cấp dịch vụ truyền thông và in ấn) đang cung cấp các dịch vụ liên quan đến Chương trình này không được tham gia chương trình.
                    </div>
                    <div className={classes.subTitle}>
                        <span className={classes.bold}> 7. Cơ cấu giải thưởng:</span>
                    </div>
                    <div className={classes.table} >
                        <div className={classes.image}>
                            <ImageViewer src={images.table2} size={'100%'} onClick={() => this.handleZoomImage(1)} />
                        </div>
                    </div>
                    <div className={classes.block}>
                        <span className={classes.note}> Lưu ý về giải thưởng:</span>
                    </div>
                    <div className={classes.block}>

                        ●	 Tất cả các giải thưởng không được quy đổi thành tiền mặt.
                    </div>
                    <div className={classes.block}>

                        ●	 Đối với khách hàng trúng giải đặc biệt, giải 1 Công ty TNHH Castrol BP Petco sẽ chịu trách nhiệm đóng phí trước bạ và phí đăng ký xe theo quy định hiện hành.
                    </div>
                    <div className={classes.block}>

                        ●	 Đối với giải đặc biệt, giải 1, giải 2, với sự ủy quyền của người trúng thưởng, Công ty TNHH Castrol BP Petco sẽ thay mặt người trúng thưởng đóng Thuế thu nhập bất thường.
                    </div>
                    <div className={classes.block}>

                        ●	 Đối với khách hàng trúng giải đặc biệt, giải 1, giải 2, ban tổ chức sẽ trao thưởng quà tặng là màu ngẫu nhiên. Khách hàng không được lựa chọn màu sắc giải thưởng.
                    </div>
                    <div className={classes.block}>

                        ●	 Khách hàng phải chịu các chi phí phát sinh có liên quan đến việc nhận thưởng như chi phí đi lại.
                    </div>
                    <div className={classes.block}>

                        ●	 Giải thưởng là Voucher Gotit được trả trực tiếp tại giao diện website đổi thưởng hoặc thông qua tin nhắn chương trình với tên Castrol.
                    </div>
                    <div className={classes.block}>
                        ●	  Giải thưởng là thẻ nạp điện thoại được trả trực tiếp vào số điện thoại di động mà khách hàng dùng để tham gia chương trình.

                    </div>
                    <div className={classes.subTitle}>
                        <span className={classes.bold}>8. Nội dung chi tiết thể lệ chương trình khuyến mại:</span>
                    </div>
                    <div className={classes.subTitle}>
                        <span className={classes.bold}>8.1 Cách thức tham gia chương trình:</span>
                    </div>
                    <div className={classes.subContent}>


                        <div className={classes.block}>
                            <span className={classes.bold}>* Đối với Giải 1, 2, 3, 4:</span>
                        </div>
                        <div className={classes.block}>
                            - Trong thời gian khuyến mại, khách hàng mua sản phẩm khuyến mại nhãn hiệu Castrol theo danh sách hàng hóa dịch vụ nêu trên sẽ nhận được mã dự thưởng nằm dưới nhãn mặt trước sản phẩm

                        </div>
                        <div className={classes.block}>

                            -	Khách hàng bóc phần nhãn có chứa mã QR code và mã số ở mặt trong theo hướng dẫn để tham gia chương trình bằng 1 trong 2 cách thức sau:
                        </div>
                    </div>
                    <div className={classes.subTitle}>

                        <div className={classes.block}>
                            <span className={classes.bold}>    ● Cách 1: Quét mã QR:</span>
                        </div>
                        <div className={classes.block}>
                            Khách hàng mua sản phẩm có thông tin chương trình khuyến mại và tiến hành Quét mã QR được in trên sản phẩm để tham gia chương trình khuyến mại. Mã QR trên mỗi chai sản phẩm là mã khác nhau tương ứng với mã code riêng biệt bên dưới. Sau khi quét mã, khách hàng sẽ được dẫn vào trang điền số điện thoại theo giao diện bên dưới, điền Mã nhận thưởng và số điện thoại và bấm vào ô “Tôi đã đọc và đồng ý với Thể lệ của chương trình”.

                        </div>
                        <div className={classes.block}>
                            <span className={classes.bold}></span>
                            Sau khi khách hàng bấm
                            <span className={classes.bold}> THAM GIA NGAY</span>
                            , hệ thống sẽ gửi đến số điện thoại khách hàng mã OTP để xác thực. Khách hàng nhập mã xác thực OTP XÁC NHẬN và tiếp tục nhập họ tên, tỉnh/thành phố. Khách hàng nhấn xác nhận và tiến hành tham gia quay thưởng bằng cách nhấn
                            <span className={classes.highlight}>“ĐUA NGAY”</span>.
                            <span className={classes.bold}></span>
                        </div>
                        <div className={classes.block}>
                            Kết quả quay thưởng sẽ được thông báo trực tiếp trên giao diện website:
                            <a className={classes.link} href='khuyenmaicastrol.com'> khuyenmaicastrol.com</a>
                        </div>
                        <div className={classes.block}>

                            Thời hạn cuối cùng khách hàng phải quét mã QR để tham gia chương trình là 23h59p ngày 31/01/2024
                        </div>
                    </div>
                    <div className={classes.subContent}>
                        <div className={classes.block}>
                            <span className={classes.bold}> ● Cách 2: Truy cập website: </span>
                            <a className={classes.link} href='khuyenmaicastrol.com'> khuyenmaicastrol.com </a>

                            : Khách hàng truy cập trực tiếp vào Website:

                            <a className={classes.link} href='khuyenmaicastrol.com'> khuyenmaicastrol.com</a>

                            , bấm “Tham gia ngay” và thực hiện nhập các thông tin tương tự như Cách 1.
                            <span className={classes.bold}></span>
                        </div>
                        <div className={classes.italic}>
                            Đối với khách hàng tham gia chương trình khi sử dụng một trong các dòng sản phẩm Castrol Activ và Activ Vistra sẽ có 2 lượt tham gia quay thưởng liên tiếp, Castrol POWER 1 và POWER 1 ULTIMATE có 4 lượt quay thưởng liên tiếp. Lượt quay chỉ được áp dụng ngay sau khi quét mã QR hoặc nhập mã dự thưởng trên web, không có giá trị cộng dồn sau khi khách hàng đã thoát giao diện chương trình.

                        </div>
                        <div className={classes.block}>
                            -	Mỗi mã QR/ mã dự thưởng trên nhãn chai chỉ được quét/nhập lên web 1 lần, để nhận được số lượt chơi tương ứng với số lượt chơi theo quy định của chương trình. Mã sẽ bị vô hiệu hoá sau khi khách hàng đã quét và nhập xong thông tin.

                        </div>
                        <div className={classes.block}>
                            -	Tất cả các khách hàng tham gia chương trình trong thời gian khuyến mại dù trúng hoặc không trúng thưởng đều có cơ hội tham gia vòng quay may mắn được dự kiến tổ chức vào ngày 02.02.2024 để xác định khách hàng trúng giải đặc biệt – 1 xe hơi BMW.

                        </div>
                    </div>
                    <div className={classes.subContent}>

                        <div className={classes.block}>

                            <span className={classes.bold}>* Đối với Giải Đặc biệt: 01 Xe hơi BMW</span>
                        </div>
                        <div className={classes.block}>
                            -	Tất cả các khách hàng tham gia chương trình trong thời gian khuyến mại đều có cơ hội tham gia vòng quay may mắn được tổ chức cuối chương trình để xác định khách hàng trúng thưởng giải đặc biệt – xe hơi BMW; dù khách hàng có trúng hoặc không trúng các giải 1, giải 2, giải 3, giải 4. Mã dự thưởng sẽ được ban tổ chức lưu trữ đến kỳ quay thưởng Giải đặc biệt được dùng là cơ sở xác định chủ nhân giải đặc biệt.

                        </div>
                        <div className={classes.block}>
                            -	Đồng thời, ban tổ chức sẽ gửi tin nhắn đến khách hàng trúng thưởng giải đặc biệt thông qua tổng đài tin nhắn tên CASTROL. Thông tin khách hàng trúng thưởng sẽ được cập nhật trên website:
                            <a className={classes.link} href='khuyenmaicastrol.com'> khuyenmaicastrol.com.</a>
                        </div>
                    </div>
                    <div className={classes.subTitle}>
                        <span className={classes.bold}> 8.2 Thời gian, cách thức phát hành bằng chứng xác định trúng thưởng:</span>
                    </div>
                    <div className={classes.block}>
                        -	Mã dự thưởng được dán bên trên sản phẩm khuyến mại, khách hàng bóc phần nhãn sản phẩm có chứa mã dự thưởng theo hướng dẫn trên sản phẩm khuyến mại để tham gia chương trình. Mỗi sản phẩm khuyến mại có một mã QR.
                    </div>
                    <div className={classes.subTitle}>
                        <span className={classes.bold}>  8.3 Quy định về bằng chứng xác định trúng thưởng:</span>

                    </div>
                    <div className={classes.block}>
                        -	Mã dự thưởng: phải là mã thật do
                        <span className={classes.bold}> Công ty TNHH CASTROL BP PETCO </span>
                        phát hành với mã trúng thưởng trùng khớp với kết quả quay số và trùng với bộ mã mà

                        <span className={classes.bold}> Công ty TNHH CASTROL BP PETCO </span>
                        đã đăng ký với

                        <span className={classes.bold}>  Cục Xúc tiến thương mại - Bộ công Thương</span>
                        . Mã dự thưởng phải còn nguyên vẹn, không rách rời, chắp vá
                    </div>
                    <div className={classes.block}>
                        -	Bằng chứng xác định trúng thưởng là Mã dự thưởng và mã QR tương ứng được in bên trên sản phẩm khuyến mại, dưới mỗi mã QR sẽ là dãy gồm 9 ký tự sử dụng các chữ cái và số phải rõ ràng, không bị cạo sửa, tẩy xóa, không bị biến dạng khác với quy cách ban đầu. Khách hàng dùng mã dự thưởng hoặc mã QR để tham gia chương trình khuyến mại theo 1 trong 2 cách trên.

                    </div>
                    <div className={classes.subTitle}>

                        <span className={classes.bold}>   8.4 Thời gian, địa điểm và cách thức xác định trúng thưởng:</span>

                    </div>
                    <div className={classes.subContent}>


                        <div className={classes.block}>

                            <span className={classes.bold}>  ▪	8.4.1: Đối với Giải 1, 2, 3, 4:</span>

                        </div>
                        <div className={classes.block}>
                            Từ 0h00 ngày 15/09/2023 - 23h59p ngày 31/01/2024 ngay sau khi khách hàng đã hoàn tất phần xác nhận thông tin và bấm “ĐUA NGAY” phần mềm quay số sẽ xác định khách hàng trúng giải một cách ngẫu nhiên trên tất cả các mã dự thưởng hợp lệ về chương trình cho đến khi hết số lượng giải đã đăng ký.

                        </div>
                        <div className={classes.block}>
                            Việc quay số xác định trúng thưởng sẽ được thực hiện ngẫu nhiên bằng phần mềm quay số xác định trúng thưởng do
                            <span className={classes.bold}> Công ty TNHH Công nghệ ViHat </span>
                            địa chỉ: Số 140-142, Đường Số 2, Khu nhà ở Vạn Phúc 1(Vạn Phúc City), Phường Hiệp Bình Phước, TP. Thủ Đức, TPHCM phụ trách.

                        </div>
                    </div>
                    <div className={classes.subContent}>


                        <div className={classes.block}>
                            <span className={classes.bold}> ▪	8.4.2 Đối với Giải đặc biệt :</span>


                        </div>
                        <div className={classes.block}>
                            Việc quay số xác định trúng thưởng sẽ được thực hiện dự kiến vào ngày 02. 02.2024 cho các mã dự thưởng tham gia trên website chương trình trong thời gian khuyến mại của chương trình từ 00h00 15/09/2023 đến 23h59 ngày 31/01/2024. Hình thức dự kiến: livestream trên nền tảng
                            <a className={classes.link} href='tiktok.com/@castrol_vn'> tiktok.com/@castrol_vn </a>
                            của nhãn hàng Castrol.

                        </div>
                    </div>
                    <div className={classes.subTitle}>

                        <span className={classes.bold}> ▪	8.5 Cách thức, thời hạn thông báo trúng thưởng:</span>

                    </div>
                    <div className={classes.subContent}>


                        <div className={classes.block}>

                            <span className={classes.note}>   -	Giải đặc biệt:</span>

                        </div>
                        <div className={classes.block}>
                            Giải thưởng sẽ được công bố vào lượt quay cuối cùng của chương trình dự kiến được tổ chức vào ngày 02.02.2024 đối với khách hàng ngẫu nhiên trúng thưởng giải đặc biệt:
                            <span className={classes.bold}> 01 Xe hơi BMW.</span>


                        </div>
                        <div className={classes.block}>
                            Trong vòng 1 giờ kể từ khi xác định khách hàng trúng thưởng giải đặc biệt như điều 8.4.2, khách hàng sẽ nhận được một tin nhắn từ tổng đài tên CASTROL.
                            <span className={classes.bold}></span>

                        </div>
                        <div className={classes.block}>
                            Thời hạn cuối cùng thông báo trúng thưởng: 12h00 ngày 19.02.2024

                        </div>
                    </div>
                    <div className={classes.subContent}>


                        <div className={classes.block}>

                            <span className={classes.note}> - Với giải 1, 2, 3, 4:</span>

                        </div>
                        <div className={classes.block}>
                            Nếu khách hàng may mắn trúng giải 1, 2, 3, 4 khách hàng sẽ nhận được thông báo trực tiếp trên giao diện Website
                            <a className={classes.link} href='khuyenmaicastrol.com'> khuyenmaicastrol.com.</a>

                        </div>
                        <div className={classes.block}>
                            Ban tổ chức sẽ tin nhắn thông báo đến số điện thoại khách hàng trúng giải bằng tổng đài tin nhắn Castrol sau khi quay thưởng trong vòng 10 phút.

                        </div>
                        <div className={classes.block}>
                            Thời hạn cuối cùng thông báo trúng thưởng: 12h00 ngày 19.02.2024

                        </div>
                        <div className={classes.block}>
                            Khách hàng trúng giải đặc biệt, giải 1, giải 2 phải giữ lại tin nhắn trúng giải và xác minh chủ sở hữu của số điện thoại nhận tin nhắn, đồng thời giữ lại mã dự thưởng để làm bằng chứng nhận thưởng và sẽ được yêu cầu xuất trình, nộp lại bằng chứng trúng thưởng cho nhân viên trao giải tại thời điểm trao giải. Trường hợp khách hàng không còn giữ lại mã dự thưởng, ban tổ chức sẽ căn cứ vào nội dung tin nhắn thông báo với tên Castrol được gửi đến Số điện thoại tham gia nhận thưởng. Việc người trúng giải là chủ sở hữu của số điện thoại tham gia chương trình là điều kiện bắt buộc để làm bằng chứng nhận giải.

                        </div>
                    </div>
                    <div className={classes.subTitle}>

                        <span className={classes.bold}>8.6 Thời gian địa điểm, cách thức và thủ tục trao thưởng:</span>

                    </div>
                    <div className={classes.subContent}>

                        <div className={classes.block}>

                            <span className={classes.note}>   - Giải đặc biệt, giải 1, giải 2:</span>

                        </div>
                        <div className={classes.symbol}>

                            <div className={classes.block}>
                                ▪	BTC sẽ liên hệ khách hàng từ số hotline 842888875792 trong vòng 48h kể từ lúc xác định thông tin khách hàng trúng giải để thu thập các thông tin gồm: Họ và tên, số CMND/CCCD/hộ chiếu, địa chỉ thường trú, địa điểm, thời gian khách hàng nhận giải thưởng và tiến hành trao giải theo thời gian địa điểm đã thông báo với khách hàng.

                            </div>
                            <div className={classes.block}>
                                ▪	Thời gian trao giải từ 08 giờ 00 đến 17 giờ 00 các ngày từ Thứ 2 đến Thứ sáu.

                            </div>
                            <div className={classes.block}>
                                ▪	Thời hạn cuối cùng trao giải: 17h00 ngày 29.02.2024{". "}

                            </div>
                            <div className={classes.block}>
                                ▪	Cách thức trao giải: Tại thời điểm trao giải, người trúng giải phải xuất trình cho nhân viên trao giải các giấy tờ và bằng chứng trúng thưởng như sau:

                            </div>
                            <div className={classes.block}>
                                ⮚	Giấy chứng minh nhân dân/căn cước công dân (bản gốc)

                            </div>
                            <div className={classes.block}>
                                ⮚	Mã dự thưởng kèm mã QR trúng thưởng hợp lệ

                            </div>
                            <div className={classes.block}>
                                ⮚	Tin nhắn thông báo trúng thưởng được gửi từ tổng đài với tên CASTROL đến thuê bao di động đã trúng thưởng. Trường hợp khách không còn giữ lại mã dự thưởng, BTC sẽ căn cứ vào tin nhắn thông báo trúng thưởng được gửi đến số điện thoại khách hàng để làm bằng chứng nhận thưởng.

                            </div>
                            <div className={classes.block}>
                                ▪	Khi nhận giải, khách hàng cần ký biên bản xác nhận về việc nhận thưởng.

                            </div>
                            <div className={classes.block}>

                                ▪	Công ty TNHH Castrol BP Petco sẽ thay mặt người trúng thưởng với ủy quyền để đóng Thuế thu nhập bất thường liên quan đến việc nhận giải này.
                            </div>
                            <div className={classes.block}>
                                ▪	Thời hạn cuối cùng Công ty TNHH Castrol BP Petco có trách nhiệm trao thưởng là 29.02.2024. Sau thời hạn này, đối với trường hợp không liên lạc được với người trúng thưởng sau khi đã thông báo hoặc khách hàng không nhận thưởng, giải thưởng sẽ được xử lý theo quy định của pháp luật.

                            </div>
                            <div className={classes.block}>
                                ▪	Công ty có quyền từ chối trao giải cho người nhận giải nếu chứng minh được có gian lận. Tất cả giải thưởng không được quy đổi sang tiền mặt

                            </div>
                        </div>
                    </div>

                    <div className={classes.subContent}>
                        <div className={classes.block}>
                            <span className={classes.note}>- Giải 3, giải 4:</span>
                        </div>
                        <div className={classes.symbol}>

                            •	Sau khi khách hàng được xác định trúng giải ba, hệ thống sẽ trả kết quả trực tiếp trên website:

                            <a className={classes.link} href='khuyenmaicastrol.com'> khuyenmaicastrol.com. </a>
                            Với giải 3: Khách hàng sẽ nhận được đường link Voucher thông qua tin nhắn từ tổng đài với tên CASTROL. Với giải 4: Trong vòng 24h kể từ lúc khách hàng nhận được thông báo trúng thưởng khách hàng nhận được tiền thưởng cộng trực tiếp vào số điện thoại đăng ký nhận thưởng. Thời hạn cuối cùng trao giải: 12h00 ngày 29.02.2024
                        </div>
                    </div>
                    <div className={classes.subTitle}>
                        <span className={classes.bold}> 9. Đầu mối giải đáp thắc mắc cho khách hàng về các vấn đề liên quan đến chương trình khuyến mại (người liên hệ, điện thoại...):
                        </span>

                    </div>
                    <div className={classes.block}>
                        Phòng dịch vụ khách hàng của Công ty TNHH Castrol BP Petco
                        <span className={classes.bold}></span>

                    </div>
                    <div className={classes.block}>
                        Địa chỉ: Lầu 9, Tòa nhà Times Square 57-69F Đồng Khởi, Phường Bến Nghé, Quận 1, TP.HCM. Số điện thoại 1900068665 hoặc 028 38219153 để được giải đáp.

                    </div>
                    <div className={classes.subTitle}>

                        <span className={classes.bold}>10. Các quy định khác (nếu có):</span>

                    </div>
                    <div className={classes.block}>

                        -	Bằng cách tham gia chương trình này, người tham gia xác nhận đã đọc kỹ và đồng ý với các điều khoản và thể lệ của chương trình. Trong trường hợp xảy ra tranh chấp liên quan đến chương trình này, Công ty TNHH Castrol BP Petco sẽ có trách nhiệm trực tiếp giải quyết bằng hình thức hòa giải . Nếu tranh chấp đó không giải quyết được bằng hòa giải thì sẽ được giải quyết bằng trọng tài tại Trung tâm Trọng Tài Quốc Tế Việt Nam (VIAC) theo Quy tắc tố tụng trọng tài của Trung tâm này.
                    </div>
                    <div className={classes.block}>
                        -	Nhân viên Công ty TNHH Castrol BP Petco; Các nhà phân phối của Công ty TNHH Castrol BP Petco và nhân viên của họ; Khách hàng của các nhà phân phối của Công ty TNHH Castrol BP Petco (mua sản phẩm Castrol từ những nhà phân phối này) và nhân viên của họ; Các nhà cung cấp dịch vụ (bao gồm các công ty quảng cáo, nhà cung cấp dịch vụ truyền thông và in ấn) đang cung cấp các dịch vụ liên quan đến Chương trình này không được tham gia chương trình.

                    </div>
                    <div className={classes.block}>
                        -	Khách hàng tham gia chương trình khuyến mại này vẫn được tham gia các chương trình khuyến mại khác do Công ty TNHH Castrol BP Petco đang đồng thời triển khai thực hiện.

                    </div>
                    <div className={classes.block}>
                        -	Nếu khách hàng trúng thưởng đồng ý, Công ty TNHH Castrol BP Petco sẽ sử dụng thông tin và hình ảnh của khách hàng trúng thưởng mà không phải trả thêm bất kỳ khoản chi phí nào liên quan cho người trúng thưởng cho các mục đích sau:

                    </div>
                    <div className={classes.symbol}>


                        <div className={classes.block}>
                            o   Phục vụ cho Chương trình này (quảng bá trên các mạng xã hội, quảng bá trực tuyến, quảng bá truyền thông, xác định người tham gia được nhận quà, liên hệ với người tham gia thắng giải để trao quà);

                        </div>
                        <div className={classes.block}>
                            o   Nhận các thông tin quảng cáo và chương trình khuyến mại từ Công ty TNHH Castrol BP Petco Việt Nam qua điện thoại và thư điện tử (email), zalo;

                        </div>
                        <div className={classes.block}>
                            o   Thực hiện các cuộc gọi khảo sát và chạy các chương trình quảng cáo; Thực hiện những việc được yêu cầu hoặc được phép theo quy định của pháp luật Việt Nam.

                        </div>
                        <div className={classes.block}>
                            o   Mục đích khác mà Công ty TNHH Castrol BP Petco thông báo trước cho người tham gia và được người tham gia chấp thuận theo quy định của pháp luật Việt Nam.

                        </div>
                    </div>
                    <div className={classes.block}>
                        -	Việc thu thập và xử lý Dữ liệu sẽ được thực hiện theo các quy định trong Thông báo về Quyền Riêng tư của Công ty TNHH Castrol BP Petco tại
                        <a className={classes.link} href='https://www.khuyenmaicastrol.com/thong-bao-ve-quyen-rieng-tu'> https://www.khuyenmaicastrol.com/thong-bao-ve-quyen-rieng-tu. </a>

                    </div>
                    <div className={classes.block}>
                        -	 Người tham gia có quyền yêu cầu Công ty TNHH Castrol BP Petco xóa thông tin cá nhân của mình. Để thực hiện quyền tại Mục này, người tham gia vui lòng liên hệ với Công ty TNHH Castrol BP Petco thông qua email
                        <a className={classes.link} href='dichvukhachhang@se1.bp.com' > dichvukhachhang@se1.bp.com  </a>
                        hoặc hotline (+84) 28 38219153 hoặc thông tin liên hệ khác do Công ty TNHH Castrol BP Petco thông báo cho người tham gia vào từng thời điểm.

                    </div>
                    <div className={classes.block}>
                        -	Sau khi kết thúc chương trình khuyến mại, Công ty TNHH Castrol BP Petco có trách nhiệm báo cáo kết quả thực hiện chương trình khuyến mại trên theo đúng quy định của pháp luật về thời hạn báo cáo, Công ty TNHH Castrol BP Petco lưu trữ và chịu trách nhiệm và các tài liệu, chứng từ trao thưởng để phục vụ công tác thanh tra, kiểm tra theo quy định của pháp luật.

                    </div>
                    <div className={classes.block}>
                        -	Đối với giải thưởng không có người trúng thưởng của chương trình khuyến mại, Công ty TNHH Castrol BP Petco có trách nhiệm trích nộp ngân sách nhà nước theo quy định tại khoản 4 Điều 96 Luật Thương mại.

                    </div>
                </div>

            </Fragment>
        )
    }
    render() {
        const { classes, i18n, } = this.props;
        return (
            <div className={classes.cLayout}>
                <div className={classes.wrapper}>
                    <div className={classes.header}>
                        <CTitle label={i18n.t('activityRules')} />
                    </div>
                    <div className={classes.content}>
                        {/* <BodyActivityRule />   */}
                        {this._renderContent()}
                    </div>
                </div>
            </div>
        );
    }
}

export default compose(withI18n(), withStyles(styles))(ActivityRulesPage);
