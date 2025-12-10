import { Question } from './types';

/*
 * =================================================================
 * HƯỚNG DẪN CHỈNH SỬA CÂU HỎI
 * =================================================================
 * Để thay đổi, thêm hoặc xóa câu hỏi, bạn chỉ cần chỉnh sửa mảng `QUESTIONS` bên dưới.
 * Mỗi câu hỏi là một object trong mảng, có cấu trúc như sau:
 *
 * {
 *   question: "Nội dung câu hỏi của bạn", // String: Văn bản câu hỏi
 *   options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"], // Array[String]: Mảng gồm 4 đáp án
 *   correctAnswerIndex: 0, // Number: Vị trí của đáp án đúng trong mảng `options` (bắt đầu từ 0)
 *                          // Ví dụ: 0 là đáp án A, 1 là đáp án B, ...
 *   explanation: "Giải thích chi tiết tại sao đáp án này đúng.", // String: Văn bản giải thích
 *   era: "Tên thời kỳ lịch sử" // String: Tên mốc thời gian để hiển thị trên thanh tiến trình
 * },
 *
 * Bạn có thể thêm bao nhiêu câu hỏi tùy thích, game sẽ tự động cập nhật.
 */

export const QUESTIONS: Question[] = [
  {
    question: "Nhà nước đầu tiên của người Việt có tên là gì?",
    options: ["Văn Lang", "Âu Lạc", "Đại Việt", "Vạn Xuân"],
    correctAnswerIndex: 0,
    explanation: "Nhà nước Văn Lang của các vua Hùng được coi là nhà nước đầu tiên trong lịch sử Việt Nam, đặt nền móng cho nền văn minh sông Hồng.",
    era: "Thời Dựng Nước"
  },
  {
    question: "Ai là người lãnh đạo cuộc khởi nghĩa Hai Bà Trưng chống lại ách đô hộ của nhà Hán?",
    options: ["Trưng Trắc và Trưng Nhị", "Bà Triệu", "Lý Bí", "Dương Đình Nghệ"],
    correctAnswerIndex: 0,
    explanation: "Năm 40 sau Công nguyên, hai chị em Trưng Trắc và Trưng Nhị đã phất cờ khởi nghĩa ở Mê Linh, đánh đuổi thái thú Tô Định và giành lại độc lập cho dân tộc.",
    era: "Bắc Thuộc"
  },
  {
    question: "Vị vua nào đã dời đô từ Hoa Lư về thành Đại La và đổi tên thành Thăng Long vào năm 1010?",
    options: ["Lý Thái Tổ", "Trần Nhân Tông", "Lê Lợi", "Ngô Quyền"],
    correctAnswerIndex: 0,
    explanation: "Năm 1010, vua Lý Thái Tổ với tầm nhìn chiến lược đã ban 'Chiếu dời đô', chuyển kinh đô từ Hoa Lư (Ninh Bình) về Đại La và đổi tên thành Thăng Long (Hà Nội ngày nay).",
    era: "Nhà Lý"
  },
  {
    question: "Trận chiến nào đã quyết định thắng lợi của cuộc kháng chiến chống quân Mông - Nguyên lần thứ nhất?",
    options: ["Đông Bộ Đầu", "Bạch Đằng", "Chương Dương", "Vạn Kiếp"],
    correctAnswerIndex: 0,
    explanation: "Trận Đông Bộ Đầu (năm 1258) là trận đánh then chốt, đập tan ý chí xâm lược của quân Mông Cổ, buộc chúng phải rút chạy khỏi Thăng Long, góp phần quyết định vào thắng lợi chung.",
    era: "Nhà Trần"
  },
  {
    question: "Ai là người lãnh đạo cuộc khởi nghĩa Lam Sơn chống quân Minh?",
    options: ["Lê Lợi", "Nguyễn Trãi", "Trần Hưng Đạo", "Quang Trung"],
    correctAnswerIndex: 0,
    explanation: "Lê Lợi (Lê Thái Tổ) là người đã dựng cờ khởi nghĩa tại Lam Sơn (Thanh Hóa) vào năm 1418, lãnh đạo cuộc kháng chiến trường kỳ 10 năm chống ách đô hộ của nhà Minh.",
    era: "Khởi Nghĩa Lam Sơn"
  },
  {
    question: "Hoàng đế Quang Trung - Nguyễn Huệ đã đại phá quân Thanh vào dịp nào?",
    options: ["Tết Kỷ Dậu 1789", "Tết Mậu Thân 1968", "Tết Canh Tý 1780", "Tết Bính Ngọ 1786"],
    correctAnswerIndex: 0,
    explanation: "Cuộc hành quân thần tốc và chiến thắng Ngọc Hồi - Đống Đa của vua Quang Trung diễn ra vào mùa xuân năm Kỷ Dậu 1789, quét sạch 29 vạn quân Thanh xâm lược.",
    era: "Tây Sơn"
  },
  {
    question: "Thực dân Pháp nổ súng xâm lược Việt Nam lần đầu tiên tại đâu?",
    options: ["Bán đảo Sơn Trà (Đà Nẵng)", "Cửa biển Thuận An (Huế)", "Gia Định (Sài Gòn)", "Hà Nội"],
    correctAnswerIndex: 0,
    explanation: "Ngày 1/9/1858, liên quân Pháp - Tây Ban Nha đã nổ súng tấn công bán đảo Sơn Trà (Đà Nẵng), mở đầu cho quá trình xâm lược Việt Nam của thực dân Pháp.",
    era: "Chống Pháp"
  },
  {
    question: "Bác Hồ đọc bản Tuyên ngôn Độc lập, khai sinh ra nước Việt Nam Dân chủ Cộng hòa vào ngày nào?",
    options: ["02/09/1945", "30/04/1975", "19/08/1945", "07/05/1954"],
    correctAnswerIndex: 0,
    explanation: "Ngày 02/09/1945, tại Quảng trường Ba Đình (Hà Nội), Chủ tịch Hồ Chí Minh đã đọc bản Tuyên ngôn Độc lập, trịnh trọng tuyên bố với thế giới về sự ra đời của nước Việt Nam Dân chủ Cộng hòa.",
    era: "Cách Mạng T8"
  },
  {
    question: "Chiến dịch nào đã kết thúc thắng lợi cuộc kháng chiến chống thực dân Pháp của nhân dân ta?",
    options: ["Điện Biên Phủ", "Hồ Chí Minh", "Biên giới Thu - Đông", "Việt Bắc"],
    correctAnswerIndex: 0,
    explanation: "Chiến thắng Điện Biên Phủ 'lừng lẫy năm châu, chấn động địa cầu' ngày 07/05/1954 đã buộc thực dân Pháp phải ký Hiệp định Genève, chấm dứt chiến tranh và lập lại hòa bình ở Đông Dương.",
    era: "1945 - 1954"
  },
  {
    question: "Cuộc Tổng tiến công và nổi dậy mùa Xuân năm 1975 đỉnh cao là chiến dịch nào?",
    options: ["Chiến dịch Hồ Chí Minh", "Chiến dịch Tây Nguyên", "Chiến dịch Huế - Đà Nẵng", "Chiến dịch Mậu Thân"],
    correctAnswerIndex: 0,
    explanation: "Chiến dịch Hồ Chí Minh là chiến dịch cuối cùng trong Cuộc Tổng tiến công và nổi dậy mùa Xuân 1975, giải phóng hoàn toàn Sài Gòn và miền Nam, thống nhất đất nước.",
    era: "Chống Mỹ"
  },
  {
    question: "Sự kiện lịch sử nào diễn ra vào ngày 30/04/1975?",
    options: ["Giải phóng miền Nam, thống nhất đất nước", "Ký kết Hiệp định Paris", "Tổng khởi nghĩa giành chính quyền", "Chiến thắng Điện Biên Phủ"],
    correctAnswerIndex: 0,
    explanation: "Ngày 30/04/1975, xe tăng của quân Giải phóng đã tiến vào Dinh Độc Lập, chính quyền Sài Gòn đầu hàng vô điều kiện, đánh dấu sự kết thúc của Chiến tranh Việt Nam và sự thống nhất của đất nước.",
    era: "Thống Nhất"
  },
  {
    question: "Đại hội Đảng nào đã khởi xướng đường lối Đổi Mới toàn diện đất nước?",
    options: ["Đại hội VI (1986)", "Đại hội V (1982)", "Đại hội VII (1991)", "Đại hội IX (2001)"],
    correctAnswerIndex: 0,
    explanation: "Đại hội đại biểu toàn quốc lần thứ VI của Đảng Cộng sản Việt Nam (tháng 12/1986) đã đề ra đường lối Đổi Mới, mở ra một thời kỳ phát triển mới cho kinh tế - xã hội của đất nước.",
    era: "Đổi Mới"
  }
];
