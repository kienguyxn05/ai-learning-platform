-- ============================================================
-- AI Learning Platform — Seed Data (Chuẩn UUID hex 0-9, a-f)
-- ============================================================

-- 1. Xóa dữ liệu cũ nếu muốn reset (theo thứ tự quan hệ từ con đến cha)
DELETE FROM quiz_attempts;
DELETE FROM lesson_progress;
DELETE FROM lessons;
DELETE FROM modules;
DELETE FROM courses;
DELETE FROM categories;

-- 2. Thêm Categories
INSERT INTO categories (id, name, slug, description) VALUES
  ('a0000000-0000-0000-0000-000000000001', 'Toán học cho AI', 'mathematics-for-ai', 'Nền tảng toán học thiết yếu cho Machine Learning và Deep Learning'),
  ('a0000000-0000-0000-0000-000000000002', 'Machine Learning cơ bản', 'machine-learning-basics', 'Các thuật toán học máy cổ điển và phương pháp đánh giá mô hình');

-- 3. Thêm Courses
INSERT INTO courses (id, category_id, title, slug, description, thumbnail_url, level) VALUES
  (
    'b0000000-0000-0000-0000-000000000001',
    'a0000000-0000-0000-0000-000000000001',
    'Linear Algebra for Machine Learning',
    'linear-algebra',
    'Nắm vững đại số tuyến tính: vector, ma trận, định thức, không gian vector và tích vô hướng — nền móng cốt lõi cho mọi mô hình AI.',
    NULL,
    'beginner'
  ),
  (
    'b0000000-0000-0000-0000-000000000002',
    'a0000000-0000-0000-0000-000000000001',
    'Calculus & Optimization for Deep Learning',
    'calculus',
    'Hiểu sâu về đạo hàm, gradient, đạo hàm riêng và thuật toán Gradient Descent tối ưu hóa trọng số mạng nơ-ron.',
    NULL,
    'intermediate'
  );

-- 4. Thêm Modules
INSERT INTO modules (id, course_id, title, position) VALUES
  ('c0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000001', 'Vectors and Spaces', 1),
  ('c0000000-0000-0000-0000-000000000002', 'b0000000-0000-0000-0000-000000000001', 'Matrix Transformations', 2),
  ('c0000000-0000-0000-0000-000000000003', 'b0000000-0000-0000-0000-000000000002', 'Derivatives & Rates of Change', 1),
  ('c0000000-0000-0000-0000-000000000004', 'b0000000-0000-0000-0000-000000000002', 'Gradient Descent & Optimization', 2);

-- 5. Thêm Lessons
INSERT INTO lessons (id, module_id, title, slug, description, video_url, transcript, notes, duration_seconds, position) VALUES
  (
    'd0000000-0000-0000-0000-000000000001',
    'c0000000-0000-0000-0000-000000000001',
    'Introduction to Vectors',
    'introduction-to-vectors',
    'Khái niệm cơ bản về vector trong không gian 2D và 3D, biểu diễn hình học và đại số.',
    NULL,
    'Chào mừng các bạn đến với bài học đầu tiên về Vector. Trong toán học và khoa học máy tính, vector là một cấu trúc dữ liệu cơ bản biểu diễn cả độ lớn và hướng. Đối với Machine Learning, mỗi mẫu dữ liệu là một vector trong không gian nhiều chiều.',
    '**Điểm cốt lõi:**\n- Vector có hướng và độ lớn.\n- Phép cộng vector tuân theo quy tắc hình bình hành.\n- Nhân vô hướng thay đổi độ dài hoặc đảo chiều vector.',
    600,
    1
  ),
  (
    'd0000000-0000-0000-0000-000000000002',
    'c0000000-0000-0000-0000-000000000001',
    'Dot Product & Angles',
    'dot-product-and-angles',
    'Tích vô hướng giữa hai vector, ý nghĩa hình học và công thức tính góc cosin.',
    NULL,
    'Tích vô hướng (dot product) là một phép toán cực kỳ quan trọng trong AI. Nó cho phép ta tính góc giữa hai vector và đo lường mức độ tương đồng giữa các đặc trưng (Cosine Similarity).',
    '**Công thức quan trọng:**\n- `a · b = |a| * |b| * cos(θ)`\n- Nếu `a · b = 0`, hai vector vuông góc (orthogonal) với nhau.',
    720,
    2
  ),
  (
    'd0000000-0000-0000-0000-000000000003',
    'c0000000-0000-0000-0000-000000000002',
    'Matrices as Linear Transforms',
    'matrices-as-linear-transforms',
    'Xem ma trận như một phép biến đổi không gian: xoay, co giãn, kéo nghiêng.',
    NULL,
    'Khi nhân một ma trận với một vector, ta đang thực hiện một phép biến đổi không gian tuyến tính. Các cột của ma trận chính là vị trí mới của các vector cơ sở sau phép biến đổi.',
    '**Lưu ý:**\n- Gốc tọa độ luôn giữ nguyên trong phép biến đổi tuyến tính.\n- Các đường thẳng song song vẫn song song và cách đều nhau.',
    900,
    1
  ),
  (
    'd0000000-0000-0000-0000-000000000004',
    'c0000000-0000-0000-0000-000000000003',
    'The Concept of Derivative',
    'concept-of-derivative',
    'Ý nghĩa hình học của đạo hàm: hệ số góc của tiếp tuyến và tốc độ biến thiên tức thời.',
    NULL,
    'Đạo hàm đo lường độ nhạy của hàm số khi biến số đầu vào thay đổi một lượng cực nhỏ. Trong AI, đạo hàm giúp ta biết cần điều chỉnh trọng số như thế nào để giảm lỗi dự đoán.',
    '**Ý nghĩa:**\n- Đạo hàm dương: hàm số đồng biến.\n- Đạo hàm âm: hàm số nghịch biến.\n- Đạo hàm = 0: điểm cực trị tiềm năng.',
    840,
    1
  );
