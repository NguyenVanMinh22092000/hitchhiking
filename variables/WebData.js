import { random10Str } from '@utils/StringUtils';
import { randomString } from '@utils/Utils';

export const genRuleInstructions = () => [
    {
        id: random10Str(),
        title: 'CHÍNH SÁCH BẢO MẬT “THAY NHỚT CASTROL - SĂN NGAY XẾ XỊN”',
        descriptions: [
            {
                id: random10Str(),
                desc: 'Chính sách bảo vệ quyền riêng tư này áp dụng cho chương trình khuyến mại của Công ty TNHH Castrol BP Petco (“BP” hoặc “BP Castrol” hoặc “chúng tôi”), dành riêng cho Người Tiêu Dùng tham gia chương trình khuyến mại mà BP và các Công ty liên kết và / hoặc Chi nhánh của BP sẽ thu thập một số Dữ liệu Cá nhân nhất định.',
            },
            {
                id: random10Str(),
                desc: 'Kể từ năm 2001, BP đã có Chính sách bảo mật dữ liệu quy định các tiêu chuẩn toàn cầu liên quan đến việc tuân thủ quyền riêng tư dữ liệu. Năm 2010, BP đã nhận được sự chấp thuận của Văn phòng Ủy viên Thông tin Vương quốc Anh cho Quy tắc Doanh nghiệp ràng buộc của mình. Quy tắc doanh nghiệp ràng buộc của BP là khuôn khổ tuân thủ toàn cầu được sử dụng trong công ty để quản lý và xử lý thông tin cá nhân. Các quy tắc này, cùng với các thủ tục thực tế nội bộ khác, bao gồm khuôn khổ tuân thủ quyền riêng tư được gọi là Quy tắc doanh nghiệp ràng buộc của BP (“BCR”).',
            },

            {
                id: random10Str(),
                desc: 'Castrol tôn trọng quyền riêng tư của mỗi cá nhân, vì thế chúng tôi luôn cố gắng bảo vệ toàn bộ thông tin của bạn. Chính sách về quyền riêng tư sẽ thể hiện quá trình chúng tôi thu thập, chuyển đổi, xử lý và sử dụng.',
            },
            {
                id: random10Str(),
                desc: 'Bằng việc cung cấp thông tin cá nhân, bạn đã đồng ý và chấp nhận việc trao đổi, xử lý, sử dụng và công bố thông tin được đề cập tại Chính sách này.',
            },
            {
                id: random10Str(),
                desc: 'Vui lòng đọc Chính sách quyền riêng tư này một cách cẩn thận vì nó chứa những thông tin quan trọng để giúp bạn hiểu các thông lệ của chúng tôi về bất kỳ Dữ liệu Cá nhân nào bạn cung cấp cho chúng tôi hoặc chúng tôi thu thập theo cách khác trong bối cảnh của chương trình khuyến mại (“Dữ liệu Cá nhân”). Chúng tôi tôn trọng quyền riêng tư của bạn và cam kết bảo mật Dữ liệu Cá nhân của bạn, quản lý dữ liệu bằng trách nhiệm pháp lý của chúng tôi theo Luật bảo vệ dữ liệu hiện hành. Nếu bạn không đồng ý với chính sách này, bạn có thể không tham gia/ sử dụng chương trình khuyến mại của chúng tôi được. BP Castrol là Bên kiểm soát Dữ liệu Cá nhân được thu thập và xử lý từ chương trình khuyến mại. Địa chỉ trụ sở: Lầu 9, Tòa nhà Times Square 22-36 Nguyễn Huệ và 57-69F Đồng khởi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh.',
            },
        ],
    },
    {
        id: random10Str(),
        title: 'I. CHÚNG TÔI THU THẬP THÔNG TIN CÁ NHÂN GÌ?',
        descriptions: [
            {
                id: random10Str(),
                desc: '“Thông tin Cá nhân” là bất kỳ thông tin nào xác định bạn là một người dùng cá nhân và bất kỳ thông tin nào khác mà chúng tôi liên kết với thông tin đó. Khi bạn tham gia chương trình khuyến mại của Castrol cho việc sử dụng dịch vụ của chúng tôi, liên hệ chúng tôi, mua sản phẩm hoặc bất kỳ tương tác nào, bạn cần cung cấp các thông tin. Chúng tôi thu thập một số loại thông tin từ một số nguồn khác nhau:',
            },

            {
                id: random10Str(),
                subTitle:
                    '1. Thông tin hồ sơ và nội dung khác mà bạn tự nguyện cung cấp cho chúng tôi, có thể bao gồm:',
                desc: 'Khi bạn đăng ký tài khoản để tham gia chương trình khuyến mại của BP Castrol cho việc sử dụng dịch vụ của chúng tôi, liên hệ chúng tôi (bao gồm trên mạng xã hội), mua sản phẩm hoặc bất kỳ tương tác nào, chúng tôi sẽ thu thập các loại thông tin bao gồm:',
            },
            {
                id: random10Str(),
                inlineSymboy: '- Thông tin liên hệ: ',
                desc: 'họ tên, ngày sinh, giới tính, địa chỉ email, địa chỉ thực tế, số điện thoại hoặc thông tin liên hệ khác bạn để giao quà tặng đến bạn.',
            },
            {
                id: random10Str(),
                inlineSymboy: '- Căn cước công dân/Hộ chiếu. ',
                desc: 'Trong một vài trường hợp cụ thể, chúng tôi sẽ cần căn cước công dân hoặc hộ chiếu bản gốc của bạn để xác nhận bạn trên 18 tuổi và có thể tham gia các hoạt động thương mại của chúng tôi như (sự kiện âm nhạc, quay số trúng thưởng, chương trình khuyến mại, …). Hơn nữa, khi bạn giành được giải thưởng trong các chương trình khuyến mại của chúng tôi, chúng tôi sẽ yêu cầu bạn xuất trình chứng minh nhân dân/hộ chiếu để xác minh danh tính và tuổi của bạn để nhận giải thưởng.',
            },
            {
                id: random10Str(),
                inlineSymboy: '- Chụp ảnh và sử dụng hình ảnh trên mạng xã hội: ',
                desc: 'Khi bạn trúng giải chúng tôi sẽ thông báo để xin phép bạn chụp ảnh sau đó sử dụng cho mục đích công khai trên mạng xã hội để công bố người trúng giải theo yêu cầu của Bộ Công Thương và cũng như để quảng cáo.',
            },
            {
                id: random10Str(),
                inlineSymboy:
                    '- Bất kỳ nội dung hoặc đóng góp nào bạn đăng công khai trên Mạng: ',
                desc: 'Điều này bao gồm các nhận xét, video và ảnh mà bạn gửi. Nếu bạn liên hệ với chúng tôi thông qua một trang mạng xã hội, chúng tôi có thể thu thập mã nhận dạng mạng xã hội của bạn.',
            },
            {
                id: random10Str(),
                desc: '- Bất kỳ thông tin nào bạn cung cấp khi liên lạc với chúng tôi, qua mạng xã hội, e-mail hoặc trung tâm chăm sóc khách hàng của chúng tôi.',
            },
            {
                id: random10Str(),
                subTitle: '2. Thông tin từ các nguồn khác:',
                desc: '- Nhật ký hệ thống của chúng tôi có thể ghi lại thông tin bạn truy cập vào Mạng của chúng tôi, bao gồm yêu cầu web, địa chỉ Giao thức mạng (“IP”), mã nhận dạng trên thiết bị và thiết bị di động, thông tin trình duyệt, tương tác trên Mạng, các trang đã xem, sử dụng ứng dụng, và thông tin tương tự như vậy; chúng tôi có thể thu thập thông tin tương tự từ các email bạn nhận được từ chúng tôi, điều này có thể giúp chúng tôi theo dõi email nào được mở và liên kết nào được người nhận nhập vào.',
            },

            {
                id: random10Str(),
                desc: '- Chúng tôi sử dụng một số cookie và các công nghệ khác để giúp chúng tôi hiểu cách bạn sử dụng Mạng và cho phép chúng tôi cá nhân hóa trải nghiệm. Chúng tôi có thể yêu cầu các nhà quảng cáo hoặc các đối tác thứ ba khác phân phát quảng cáo hoặc dịch vụ đến thiết bị của bạn, dựa trên cookie hoặc các công nghệ tương tự được đặt trên Mạng của chúng tôi.',
            },
        ],
    },
    {
        id: random10Str(),
        title: 'II. Cách chúng tôi có thể sử dụng dữ liệu Cá nhân:',
        descriptions: [
            {
                id: random10Str(),
                desc: 'Chúng tôi sẽ chỉ thu thập và sử dụng dữ liệu cá nhân cho những mục đích mà bạn biết hoặc trong phạm vi kỳ vọng của bạn kỳ vọng của bạn và có liên quan đến chúng tôi. Việc bạn đồng ý cung cấp dữ liệu cá Nhân cho chúng tôi thì nó được sử dụng để cải thiện, hỗ trợ và quản lý chương trình khuyến mại. Chúng tôi có thể sử dụng dữ liệu Cá nhân khi được pháp luật cho phép, cho các mục đích kinh doanh sau:',
            },
            {
                id: random10Str(),
                blockSymbol: '+ Truyền tải thông điệp quảng cáo:',
                desc: 'Gửi thông tin quảng cáo / khuyến mại từ bất kỳ chi nhánh nào của chúng tôi hoặc thay mặt cho các chi nhánh của chúng tôi và các bên thứ ba đáng tin cậy với các thông tin như khuyến mại, thông qua các kênh mạng xã hội/internet/email/SMS, v.v. Những tài liệu quảng cáo này sẽ được gửi tới bạn với tần suất hợp lý miễn là bạn vẫn còn muốn nhận những tài liệu đó và bạn có thể yêu cầu từ chối.',
            },

            {
                id: random10Str(),
                desc: 'Trường hợp bạn muốn từ chối nhận các thông tin quảng cáo từ chúng tôi, bạn có thể thực hiện yêu cầu theo cách sau:',
            },
            {
                id: random10Str(),
                desc: '+ Nhắn tin theo cú pháp: TUCHOI gửi đến 8079. Cước phí mỗi lần gửi tin nhắn là 1.000đ.',
            },
            {
                id: random10Str(),
                desc: '+Thực hiện yêu cầu trực tiếp theo hướng dẫn trên website www.khuyenmaicastrol.com.',
            },
            {
                id: random10Str(),
                desc: '+ Liên hệ Hotline: (84) 02838219153',
            },
            {
                id: random10Str(),
                blockSymbol: '+ Phân tích nội bộ:',
                desc: '· Cung cấp hỗ trợ bán hàng và dịch vụ sau bán hàng.',
            },
            {
                id: random10Str(),
                desc: '· Cung cấp hỗ trợ bán hàng và dịch vụ sau bán hàng.',
            },
            {
                id: random10Str(),
                desc: '· Liên hệ lại nếu chúng tôi không nhận được phản hồi từ bạn trong một thời gian',
            },
            {
                id: random10Str(),
                desc: '· Để cải thiện và phát triển chương trình khuyến mại của chúng tôi và tiến hành phát triển sản phẩm.',
            },
            {
                id: random10Str(),
                blockSymbol:
                    '+ Tham gia chương trình khuyến mại, quay số may mắn, trao thưởng, kiểm toán từ cơ quan nhà nước',
                desc: '· Thông báo về sản phẩm khuyến mại, chương trình khuyến mại, sự kiện hoặc các mục đích khuyến mại khác của chúng tôi.',
            },
            {
                id: random10Str(),
                desc: '· Để xác minh danh tính của bạn nhằm sử dụng một số tính năng nhất định nhằm đảm bảo rằng bạn đủ tuổi sử dụng hoặc tham gia chương trình khuyến mại hoặc trong các trường hợp khác có thể cần phải xác minh.',
            },
            {
                id: random10Str(),
                desc: '· Để thông báo bạn là người chiến thắng trong chương trình khuyến mại của chúng tôi nếu được phép theo quy tắc khuyến mại và gửi cho bạn bất kỳ loại giải thưởng đang được áp dụng.',
            },
            {
                id: random10Str(),
                desc: '· Cho phép bạn tham gia vào các cuộc thăm dò, rút thăm trúng thưởng, khuyến mại, cuộc thi và các chương trình khuyến mại khác và quản lý các hoạt động này',
            },
        ],
    },
    {
        id: random10Str(),
        title: 'III. CHIA SẺ DỮ LIỆU CÁ NHÂN:',
        descriptions: [
            {
                id: random10Str(),
                desc: '- Chúng tôi có thể cần chia sẻ Dữ liệu Cá nhân với các bên thứ ba để giúp chúng tôi cung cấp dịch vụ và sản phẩm cho bạn và để chạy trang web của chúng tôi. Các bên thứ ba là:',
            },
            {
                id: random10Str(),
                desc: '· Chúng tôi là doanh nghiệp toàn cầu nền chúng tôi có thể chuyển dữ liệu cá nhân sang các quốc gia khác. Chúng tôi sẽ đảm bảo rằng chúng tôi tuân thủ các yêu cầu bản địa hóa bộ nhớ và áp dụng các biện pháp bảo vệ pháp lý thích hợp cho quá trình chuyển dữ liệu đó.',
            },
            {
                id: random10Str(),
                desc: '· Các Công ty liên kết thuộc tập đoàn BP với mục đích lưu trữ Dữ liệu Cá nhân được xử lý qua trang web, do các hệ thống CNTT được chia sẻ;',
            },
            {
                id: random10Str(),
                desc: '· Chuyển phát nhanh, vận chuyển hàng hóa và các Công ty dịch vụ khi cần thiết để cung cấp hàng hóa hoặc dịch vụ mà bạn đã yêu cầu;',
            },
            {
                id: random10Str(),
                desc: '· Chúng tôi có thể chia sẻ dữ liệu cá nhân với các công ty khác do chúng tôi kiểm soát hoặc tham gia kiểm soát, các bên thứ ba, chẳng hạn như các đối tác kinh doanh và nhà cung cấp dịch vụ của chúng tôi hoặc khi pháp luật yêu cầu chúng tôi làm như vậy. Chúng tôi sẽ đảm bảo rằng các đối tác kinh doanh và nhà cung cấp dịch vụ của chúng tôi phải thực hiện các nghĩa vụ bảo vệ dữ liệu thích hợp.',
            },
            {
                id: random10Str(),
                desc: '· Chúng tôi cũng có thể cần cung cấp Dữ liệu Cá nhân cho các cơ quan thực thi pháp luật để tuân thủ mọi nghĩa vụ pháp lý hoặc lệnh của tòa án.',
            },
            {
                id: random10Str(),
                desc: '· Trong trường hợp BP Castrol bán tất cả hoặc một số tài sản hoặc cổ phần của tập đoàn BP Castrol mà Dữ liệu Cá nhân được chuyển cho bên thứ ba, Dữ liệu Cá nhân của bạn có thể được cung cấp cho bên thứ ba này;',
            },
            {
                id: random10Str(),
                desc: '· Ngoài ra, chúng tôi có thể sử dụng, tiết lộ hoặc chuyển thông tin của bạn cho một Công ty liên kết thuộc tập đoàn BP Castrol trong trường hợp tái tổ chức, sáp nhập, bán, liên doanh, chuyển nhượng hoặc xử lý khác đối với tất cả hoặc bất kỳ phần nào trong kinh doanh, tài sản hoặc cổ phiếu của chúng tôi (bao gồm cả liên quan đến bất kỳ thủ tục phá sản hoặc thủ tục tương tự). Các bên thứ ba này có thể được đặt tại Liên minh Châu Âu hoặc các quốc gia khác trong Khu vực kinh tế Châu Âu (“EEA”) hoặc các nơi khác trên thế giới. Dữ liệu Cá nhân được chúng tôi lưu trữ bên trong EEA và chúng tôi sẽ đảm bảo mức độ bảo vệ đầy đủ. Chúng tôi yêu cầu các Nhà cung cấp dịch vụ sử dụng các biện pháp phù hợp để bảo vệ tính bảo mật của Dữ liệu Cá nhân.',
            },
        ],
    },
    {
        id: random10Str(),
        title: 'IV. LƯU GIỮ DỮ LIỆU CÁ NHÂN',
        descriptions: [
            {
                id: random10Str(),
                desc: '- Chúng tôi sẽ luôn luôn tuân thủ các biện pháp bảo mật kỹ thuật để bảo vệ dữ liệu cá nhân của ban. Đồng thời, chúng tôi cũng sẽ đảm bảo rằng các nhà cung cấp dịch vụ của chúng tôi cũng áp dụng các biện pháp thích hợp và các biện pháp an ninh tương tự để bảo vệ dữ liệu cá nhân của ban.',
            },
            {
                id: random10Str(),
                desc: '- Chúng tôi sẽ lưu giữ dữ liệu cá nhân của bạn trong khoảng thời gian cần thiết để thực hiện các mục đích được nêu trong Chính sách Bảo mật này trừ khi một khoảng thời gian lưu giữ lâu hơn được yêu cầu hoặc cho phép bởi các mục đích pháp lý, kiểm toán hoặc tuân thủ.',
            },
            {
                id: random10Str(),
                desc: '- Khi có yêu cầu xóa hoặc điều chỉnh dữ liệu cá nhân, chúng tôi sẽ tiến hành xóa hoặc điều chỉnh dữ liệu trong vòng 72h làm việc.',
            },
            {
                id: random10Str(),
                desc: '- Trường hợp bạn muốn yêu cầu hủy dữ liệu cá nhân trên hệ thống lưu trữ dữ liệu của chúng tôi, bạn hoàn toàn có thể chủ động thực hiện bằng cách sau:',
            },
            {
                id: random10Str(),
                desc: '+ Nhắn tin theo cú pháp: XOA DL gửi đến 8079. Cước phí mỗi lần gửi tin nhắn là 1.000đ.',
            },
            {
                id: random10Str(),
                desc: '+Thực hiện yêu cầu trực tiếp theo hướng dẫn trên website www.khuyenmaicastrol.com.',
            },
            {
                id: random10Str(),
                desc: '+ Liên hệ Hotline: (84) 02838219153',
            },
            {
                id: random10Str(),
                desc: '- Nếu bạn vi phạm Điều Khoản Dịch Vụ của chúng tôi hoặc các điều kiện hoặc chính sách khác, chúng tôi có thể ngay lập tức xóa hồ sơ và Nội Dung Người Dùng của bạn khỏi chế độ xem công khai, nhưng có thể lưu giữ thông tin khác về bạn để xử lý vi phạm.',
            },
        ],
    },
    {
        id: random10Str(),
        title: 'V. BẢO VỆ DỮ LIỆU CÁ NHÂN',
        descriptions: [
            {
                id: random10Str(),
                desc: '- Chúng tôi sẽ không bao giờ chuyển thông tin cá nhân của bạn có các thực thể không phải của BP mà không đảm bảo rằng các bên thứ ba cung cấp mức độ bảo vệ thích hợp.',
            },
            {
                id: random10Str(),
                desc: '- Chúng tôi đã đưa ra các biện pháp bảo mật thích hợp để ngăn chặn Dữ liệu Cá nhân của bạn vô tình bị mất, sử dụng hoặc truy cập một cách trái phép, bị thay đổi hoặc tiết lộ. Ngoài ra, chúng tôi hạn chế quyền truy cập vào thông tin nhận dạng cá nhân của bạn đối với nhân viên, đại lý, nhà thầu và các bên thứ ba khác có nhu cầu kinh doanh cần thiết. Họ sẽ chỉ xử lý thông tin cá nhân của bạn theo hướng dẫn của chúng tôi và tuân theo thỏa thuận bảo mật cụ thể.',
            },
            {
                id: random10Str(),
                desc: '- Tuy nhiên, không có việc truyền thông tin qua mạng internet có thể hoàn toàn an toàn và bạn cũng cần lưu ý rằng bảo mật thông tin phụ thuộc một phần vào bảo mật của máy tính bạn đang sử dụng để liên lạc với chúng tôi và bảo mật bạn sử dụng để bảo vệ thông tin Tài khoản và Mật khẩu, vì vậy, hãy cẩn thận để bảo vệ thông tin này.',
            },
            {
                id: random10Str(),
                desc: '- Trang web của chúng tôi có thể bao gồm các liên kết đến các trang web, plugin và ứng dụng của bên thứ ba. Nhấp vào các liên kết đó hoặc cho phép các kết nối đó có thể cho phép các bên thứ ba thu thập hoặc chia sẻ dữ liệu về bạn. Chúng tôi không kiểm soát các trang web, plugin hoặc ứng dụng của bên thứ ba này và không chịu trách nhiệm về tuyên bố quyền riêng tư của họ.',
            },
        ],
    },
    {
        id: random10Str(),
        title: 'VI. QUYỀN VÀ NGHĨA VỤ CỦA BẠN ĐỐI VỚI DỮ LIỆU CÁ NHÂN',
        descriptions: [
            {
                id: random10Str(),
                blockSymbol: '- Quyền của bạn đối với dữ liệu cá nhân:',
                desc: 'Bạn có quyền yêu cầu quyền truy cập và xóa Dữ liệu Cá nhân của mình, để phản đối, yêu cầu hạn chế xử lý, để nhận tổng quan về Dữ liệu Cá nhân mà bạn đã cung cấp cho chúng tôi. Tất cả các quyền của bạn phải tuân theo luật bảo vệ dữ liệu hiện hành và các luật và quy định có liên quan khác, theo Quy trình bảo mật Dữ liệu Cá nhân của BP Castrol và các hướng dẫn khác của BP Castrol.',
            },
            {
                id: random10Str(),

                desc: 'Tuy nhiên, bạn luôn có quyền không đồng ý việc chúng tôi sử dụng Dữ liệu Cá nhân của bạn để liên lạc tiếp thị trực tiếp và khi bạn làm như vậy, chúng tôi sẽ đáp ứng yêu cầu của bạn. Trường hợp bạn đã đồng ý cho chúng tôi sử dụng Dữ liệu Cá nhân của bạn, bạn có quyền rút lại sự đồng ý của bạn mà không ảnh hưởng đến tính hợp pháp của việc chúng tôi sử dụng Dữ liệu này trước khi bạn yêu cầu rút lại.',
            },
            {
                id: random10Str(),
                blockSymbol: '- Nghĩa vụ của bạn đối với dữ liệu cá nhân:',
                desc: '· Tự bảo vệ dữ liệu cá nhân của mình',
            },
            {
                id: random10Str(),
                desc: '· Tôn trọng, bảo vệ dữ liệu cá nhân của người khác',
            },
            {
                id: random10Str(),
                desc: '· Cung cấp đầy đủ, chính xác dữ liệu cá nhân khi đồng ý cho phép xử lý dữ liệu cá nhân',
            },
            {
                id: random10Str(),
                desc: '· Thực hiện quy định của pháp luật về bảo vệ dữ liệu cá nhân và tham gia phòng, chống các hành vi vi phạm quy định về bảo vệ dữ liệu cá nhân.',
            },
        ],
    },
    {
        id: random10Str(),
        title: 'VII. QUYỀN RIÊNG TƯ TRẺ EM:',
        descriptions: [
            {
                id: random10Str(),
                desc: 'Chương trình khuyến mại này không dành cho những người sử dụng dưới 18 tuổi (hoặc độ tuổi hợp pháp để sử dụng các sản phẩm được đề cập). Chúng tôi không cố ý thu thập Dữ liệu Cá nhân từ các cá nhân dưới 18 tuổi.',
            },
        ],
    },
    {
        id: random10Str(),
        title: 'VIII. THÔNG TIN NHẠY CẢM:',
        descriptions: [
            {
                id: random10Str(),
                desc: 'Chúng tôi sẽ chỉ sử dụng thông tin cá nhân nhạy cảm nếu nó là hoàn toàn cần thiết cho chúng tôi sử dụng nó. Chúng tôi sẽ chỉ sử dụng thông tin cá nhân nhạy cảm khi chúng tôi đã có sự đồng ý rõ ràng cá nhân, trừ khi có sở sở pháp lý khác để làm như vậy theo luật bảo vệ dữ liệu Châu Âu.',
            },
            {
                id: random10Str(),
                desc: 'Thông tin cá nhân nhạy cảm là thông tin liên quan đến nguồn gốc chủng tộc hoặc sắc tộc của một cá nhân, quan điểm chính trị, niềm tin tôn giáo hoặc triết học, thành viên công đoàn, dữ liệu di truyền, thông tin sinh trắc học cũng như dữ liệu về sức khỏe, kết tội hình sự hoặc đời sống tình dục hoặc định hướng tình dục của một người. Thông tin này xứng đáng được bảo vệ nghiêm ngặt hơn các thông tin cá nhân khác, vì vậy tiêu chuẩn chăm sóc của chúng tôi phải cao hơn khi xử lý loại thông tin này. Chúng tôi phải luôn luôn đánh giá xem thông tin cá nhân nhạy cảm có cần thiết cho mục đích sử dụng được đề xuất hay không và chỉ thu thập các thông tin nhận dạng cá nhân khi nó là hoàn toàn cần thiết trong bối cảnh kinh doanh của chúng tôi.',
            },
        ],
    },
    {
        id: random10Str(),
        title: 'IX. SỬA ĐỔI VÀ CẬP NHẬT:',
        descriptions: [
            {
                id: random10Str(),
                desc: 'Chúng tôi sẽ rà soát lại và cập nhật Chính sách quyền riêng tư này theo thời gian. Mọi thay đổi đối với Chính sách quyền riêng tư này sẽ được đăng trên trang Web của chúng tôi và sẽ được thông báo cho bạn trong khoảng thời gian phù hợp.',
            },
        ],
    },
    {
        id: random10Str(),
        title: 'X. CÁCH LIÊN HỆ VỚI CHÚNG TÔI',
        descriptions: [
            {
                id: random10Str(),
                desc: '',
                hightlightDesc: [
                    {
                        id: random10Str(),
                        desc: 'Nếu bạn có bất kỳ câu hỏi nào liên quan đến các quy định về quyền riêng tư của tập đoàn BP hoặc thông tin cá nhân mà chúng tôi có về bạn hay muốn thay đổi chi tiết chúng tôi có về bạn, vui lòng gửi thư điện tử cho chúng tôi qua số điện thoại ',
                        highlight: '(84) 02838219153',
                    },
                    {
                        id: random10Str(),
                        desc: ', emai: ',
                        highlight: 'privacy3@bp.com ',
                    },
                    {
                        id: random10Str(),
                        desc: 'hoặc gửi thư đến địa chỉ sau:',
                    },
                ],
            },
            {
                id: random10Str(),
                blockSymbol: 'Phòng Marketing Công Ty TNHH Castrol BP Petco',
                desc: 'Lầu 9, Tòa nhà Times Square, 22-36 Nguyễn Huệ và 57-69F Đồng khởi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh. Việt Nam',
            },
        ],
    },
];

export const genActivityRules = () => [
    {
        id: random10Str(),
        descriptions: [
            {
                id: random10Str(),
                desc: '2.  Thời gian khuyến mại: 0h00 ngày 15/09/2023 đến 23h59 ngày 31/01/2024, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
            },
        ],
    },
    {
        id: random10Str(),
        descriptions: [
            {
                id: random10Str(),
                desc: 'Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.',
            },
        ],
    },
    {
        id: random10Str(),
        descriptions: [
            {
                id: random10Str(),
                desc: 'Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet. ',
            },
        ],
    },
    {
        id: random10Str(),
        descriptions: [
            {
                id: random10Str(),
                desc: 'Vestibulum dictum ultrices elit a luctus. Sed in ante ut leo congue posuere at sit amet ligula. Pellentesque eget augue nec nisl sodales blandit sed et sem. Aenean quis finibus arcu, in hendrerit purus. Praesent ac aliquet lorem. Morbi feugiat aliquam ligula, et vestibulum ligula hendrerit vitae. Sed ex lorem, pulvinar sed auctor sit amet, molestie a nibh. Ut euismod nisl arcu, sed placerat nulla volutpat aliquet. Ut id convallis nisl. Ut mauris leo, lacinia sed elit id, sagittis rhoncus odio. Pellentesque sapien libero, lobortis a placerat et, malesuada sit amet dui. Nam sem sapien, congue eu rutrum nec, pellentesque eget ligula.',
            },
        ],
    },
    {
        id: random10Str(),
        descriptions: [
            {
                id: random10Str(),
                desc: 'Nunc tempor interdum ex, sed cursus nunc egestas aliquet. Pellentesque interdum vulputate elementum. Donec erat diam, pharetra nec enim ut, bibendum pretium tellus. Vestibulum et turpis nibh. Cras vel ornare velit, ac pretium arcu. Cras justo augue, finibus id sollicitudin et, rutrum eget metus. Suspendisse ut mauris eu massa pulvinar sollicitudin vel sed enim. Pellentesque viverra arcu et dignissim vehicula. Donec a velit ac dolor dapibus pellentesque sit amet at erat. Phasellus porttitor, justo eu ultrices vulputate, nisi mi placerat lectus, sed rutrum tellus est id urna. Aliquam pellentesque odio metus, sit amet imperdiet nisl sodales eu. Quisque viverra nunc nec vestibulum dapibus. Integer nec diam a libero tincidunt varius sed vel odio. Donec rutrum dapibus massa, vel tempor nulla porta id. Suspendisse vulputate fermentum sem sollicitudin facilisis. Aliquam vehicula sapien nec ante auctor, quis mollis leo tincidunt.',
            },
        ],
    },
    {
        id: random10Str(),
        descriptions: [
            {
                id: random10Str(),
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
            },
        ],
    },
];



export const joinInstructionDatas = [
    {
        id: random10Str(),
        icon: 'step01',
        title: 'Bước 1:',
        name: 'Xé phần nhãn chứa mã dự thưởng theo hướng dẫn',
    },
    {
        id: random10Str(),
        title: 'Bước 2:',
        icon: 'step02',
        name: 'Nhập mã dự thưởng',
        description:
            'Quét mã QR trên nhãn hoặc truy cập website chương trình để nhập mã.',
    },
    {
        id: random10Str(),
        title: 'Bước 3:',
        icon: 'step03',
        name: 'Làm theo hướng dẫn trên website để nhận thông báo kết quả trúng thưởng',
        descList: [
            {
                id: random10Str(),
                name: 'GIẢI 1 - GIẢI 2 - GIẢI 3 - GIẢI 4:',
                description:
                    'Kết quả trúng Giải 1 - Honda SH, Giải 2 - Iphone 14, Giải 3 - Voucher Gotit 100.000đ, Giải 4 - Thẻ nạp điện thoại trị giá 50.000đ được thông báo ngay sau khi nhập mã lên hệ thống.',
            },
            {
                id: random10Str(),
                name: 'GIẢI ĐẶC BIỆT - 1 xe hơi BMW X3: ',
                description:
                    'Được xác định qua 1 buổi livestream duy nhất cuối chương trình dự kiến tổ chức vào ngày 02/02/2024 tại tiktok.com/@castrol_vn.',
            },
        ],
        note: '(*)Lưu ý: Đối với các Giải Đặc Biệt, Giải 1, Giải 2, khách hàng cần giữ nhãn chai chứa mã dự thưởng và tin nhắn thông báo để làm bằng chứng xác nhận trúng thưởng khi nhận giải.',
    },
];

export const prizeClaimProcessesDatas = [
    {
        id: random10Str(),
        title: 'Giải đặc biệt, giải 1, giải 2',
        icon: 'specialPrize',
        description:
            'Khách hàng giữ lại nhãn chứa mã dự thưởng và tin nhắn thông báo trúng giải gửi từ Tổng đài Castrol để làm bằng chứng nhận giải.',
        description2: `Bộ phận CSKH của Castrol sẽ liên hệ với khách hàng để hướng dẫn thủ tục nhận giải trong vòng `,
        hightlight: '48h',
        description3:
            'làm việc kể từ khi khách hàng nhận được tin nhắn thông báo trúng giải.',
    },
    {
        id: random10Str(),
        title: 'Giải 3:',
        icon: 'phoneCard',
        name: 'Thẻ nạp điện thoại 50.000đ',
        scale: 0.8,
        description:
            'Giá trị thẻ nạp sẽ được nạp trực tiếp vào tài khoản số điện thoại khách hàng đã đăng ký tham dự chương trình.',
    },
    {
        id: random10Str(),
        title: 'Giải 4:',
        icon: 'voucher',
        name: 'Voucher Gotit trị giá 100.000đ',
        scale: 0.8,
        description:
            'Link voucher Gotit sẽ được Tổng đài Castrol gửi đến số điện thoại khách hàng đã đăng ký tham dự chương trình.',
    },
];

export const defaultWinners = [
    {
        id: 1,
        fullName: 'Nguyen Van A',
        phoneNumber: '*******456',
        prize_code: randomString('numUp', 9),
        prize: 'Một ngừi ui',
        wonDate: '20/03/2024',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8t4rc78bZmhrL1MeHJtB_bXi0js2ypZGJA&usqp=CAU',
    },
    {
        id: 23434,
        fullName: 'Tran Thi B',
        phoneNumber: '*******234',
        prize_code: randomString('numUp', 9),
        prize: 'Một căn nhà',
        wonDate: '20/11/2024',
        image: 'https://img.mensxp.com/media/content/2020/Apr/Leading-B-Wood-Singers-Who-Lost-On-Reality-Shows1200_5ea7d3e1ba5f2.jpeg',
    },
    {
        id: 234,
        fullName: 'Tran Thi B',
        phoneNumber: '*******440',
        prize_code: randomString('numUp', 9),
        prize: 'Một căn nhà',
        wonDate: '20/11/2024',
        image: 'https://npr.brightspotcdn.com/dims4/default/4d0d244/2147483647/strip/true/crop/878x593+0+0/resize/880x594!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F31%2Fdb%2F7e1d395a445fba229e9696a3a7e4%2Ffarmer-lee-jones.jpg',
    },
    {
        id: 2374,
        fullName: 'Tran Thi B',
        phoneNumber: '*******762',
        prize_code: randomString('numUp', 9),
        prize: 'Một căn nhà',
        wonDate: '20/11/2024',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM0rsBi6oFi4Rr_Y4uSHMA3CSMrONBHECIsw&usqp=CAU',
    },
    {
        id: 3534,
        fullName: 'Le Van C',
        phoneNumber: '*******987',
        prize_code: randomString('numUp', 9),
        prize: 'Một chuyến du lịch',
        wonDate: '15/06/2024',
        image: 'https://ur.umbc.edu/wp-content/uploads/sites/354/2023/01/householder2023-scaled.jpg',
    },
    {
        id: 4,
        fullName: 'Pham Thi D',
        phoneNumber: '*******440',
        prize_code: randomString('numUp', 9),
        prize: 'Một chiếc điện thoại',
        wonDate: '10/09/2024',
        image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/11/Women-doing-fitness-dance-at-health-club-1296X728-header.jpg?w=1155&h=1528',
    },
    {
        id: 5,
        fullName: 'Hoang Van E',
        phoneNumber: '*******098',
        prize_code: randomString('numUp', 9),
        prize: 'Một khoản tiền mặt',
        wonDate: '05/02/2024',
        image: 'https://bloximages.chicago2.vip.townnews.com/idahopress.com/content/tncms/assets/v3/editorial/d/a4/da4a9338-e06f-5d82-b969-622ecda0a392/62f12c369d92a.image.jpg?resize=1280%2C1280',
    },
    {
        id: 6,
        fullName: 'Vo Thi F',
        phoneNumber: '*******777',
        prize_code: randomString('numUp', 9),
        prize: 'Một máy tính xách tay',
        wonDate: '30/04/2024',
        image: 'https://cdn.britannica.com/92/189592-050-5023ACF5/dancer-dance-natyam-Indian-Bharata.jpg',
    },
    {
        id: 7,
        fullName: 'Truong Van G',
        phoneNumber: '*******765',
        prize_code: randomString('numUp', 9),
        prize: 'Một thẻ quà tặng',
        wonDate: '25/07/2024',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqI5RIkJJZaS6S6sGgOPoQft_7GmhyxQUoHw&usqp=CAU',
    },
    {
        id: 8,
        fullName: 'Do Thi H',
        phoneNumber: '*******765',
        prize_code: randomString('numUp', 9),
        prize: 'Một vé xem phim',
        wonDate: '18/12/2024',
        image: 'https://www.constructionplusasia.com/wp-content/uploads/2020/12/confident-female-worker-holding-clipboard-warehouse-scaled.jpg',
    },
];
