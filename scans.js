/* =========================================================
   SCAN OF THE MONTH — data file
   ---------------------------------------------------------
   This is the ONLY file to edit when a new scan of the month
   is published. The newest scan goes at the TOP of the list;
   it is shown as "Scan of the month" on the home page and on
   scan-of-the-month.html. Older entries form the archive.

   ARCHIVE: switched off for now (showArchive: false), because
   the birthday candle is the first scan of the month. The older
   weekly scans stay in this file; set showArchive to true to
   show them again.

   For a new entry:
   1. Put the web images (JPG, max 1200 px, white background
      cropped) in the Images folder.
   2. Copy the first block below, paste it at the top and change:
      id, year, month, date, title, summary, story, use,
      settings, images — always both "en" and "vi".
   3. "features" is optional. Each feature gets a numbered
      point on the first image (x / y in % of that image, from
      the top-left corner), a zoom image that fades in after
      zooming, a text and up to 3 detail images.
      Leave "features" out for a simple gallery.
   ========================================================= */
window.SCAN_OPTIONS = {
  showArchive: false
};

window.SCANS = [
  {
    id: 'birthday-candle',
    year: 2026,
    month: 10,
    date: '2026-10-14',
    title: {
      en: 'Sym-Tech turns one: a birthday candle in 3D',
      vi: 'Sym-Tech tròn một tuổi: cây nến sinh nhật dưới góc nhìn 3D'
    },
    summary: {
      en: 'To celebrate our first birthday we scanned a number-one birthday candle. Three details tell its story: the plastic pin at the bottom, the wick at the top and the tiny air pockets hidden in the wax.',
      vi: 'Để mừng sinh nhật đầu tiên, chúng tôi đã quét một cây nến sinh nhật hình số 1. Ba chi tiết kể nên câu chuyện của nó: chân cắm bằng nhựa ở phía dưới, bấc nến ở phía trên và những bọt khí nhỏ ẩn trong sáp.'
    },
    story: {
      en: 'Sym-Tech is one year old, so the first sample of the month almost chose itself. We placed a number-one birthday candle in our XRM prototype and ran an 8-minute scan, once with 1,000 and once with 1,500 projections. From the outside it is just a candle. Inside, the 3D reconstruction shows how it is made: how the candle fits into its plastic pin, how the wick sits in the wax, and where small pockets of air were trapped. Use the numbered points below to zoom in on each detail.',
      vi: 'Sym-Tech vừa tròn một tuổi, vì vậy mẫu quét đầu tiên của tháng gần như đã tự chọn lấy chính nó. Chúng tôi đặt một cây nến sinh nhật hình số 1 vào nguyên mẫu XRM và thực hiện một lần quét 8 phút, một lần với 1.000 và một lần với 1.500 hình chiếu. Nhìn từ bên ngoài, đó chỉ là một cây nến. Nhưng ảnh tái tạo 3D cho thấy cách nó được làm ra: cây nến được lắp vào chân cắm nhựa như thế nào, bấc nến nằm trong sáp ra sao và những bọt khí nhỏ bị giữ lại ở đâu. Hãy dùng các điểm đánh số bên dưới để phóng to từng chi tiết.'
    },
    use: {
      en: 'Why it matters: “Is the insert well anchored?”, “Is the internal part in the right place?”, “How much porosity is there?” These questions are asked every day for injection-molded parts, castings, electronics and 3D-printed components. X-ray microscopy answers them without cutting the part open.',
      vi: 'Ý nghĩa: “Chi tiết gắn kèm có được cố định chắc chắn không?”, “Bộ phận bên trong có nằm đúng vị trí không?”, “Độ xốp là bao nhiêu?” Đó là những câu hỏi được đặt ra hằng ngày đối với chi tiết ép nhựa, vật đúc, linh kiện điện tử và chi tiết in 3D. Kính hiển vi X-quang trả lời được những câu hỏi đó mà không cần cắt mở chi tiết.'
    },
    settings: { kv: 50, watt: 25, time: { en: '8 min', vi: '8 phút' } },
    images: [
      { file: 'candle-front.jpg', tag: '3D', en: '3D view – front', vi: 'Hình 3D – mặt trước' },
      { file: 'candle-back.jpg',  tag: '3D', en: '3D view – back', vi: 'Hình 3D – mặt sau' }
    ],
    features: [
      {
        id: 'pin',
        x: 52, y: 82,
        label: { en: 'The pin', vi: 'Chân cắm' },
        title: { en: 'The pin at the bottom', vi: 'Chân cắm ở phía dưới' },
        text: {
          en: 'The candle stands on a plastic holder: a flat plate with a spike to push into the cake. On top of the plate sits a hollow square sleeve. The virtual cut shows that the foot of the candle is simply pushed into this sleeve and fits tightly. The cross-section through the sleeve confirms it: a dense plastic square with the candle foot filling the opening. This tight fit is all that keeps the candle on its pin.',
          vi: 'Cây nến đứng trên một đế nhựa: một tấm phẳng có chân nhọn để cắm vào bánh. Phía trên tấm đế là một ống vuông rỗng. Lát cắt ảo cho thấy chân nến chỉ đơn giản được ấn vào ống này và vừa khít. Mặt cắt ngang qua ống xác nhận điều đó: một khung nhựa vuông đậm đặc với chân nến lấp kín lỗ mở. Chính sự vừa khít này giữ cây nến cố định trên chân cắm.'
        },
        zoom: { file: 'candle-pin-3d.jpg', en: 'Close-up: plate, square sleeve and spike', vi: 'Cận cảnh: tấm đế, ống vuông và chân nhọn' },
        images: [
          { file: 'candle-pin-cut.jpg',   en: 'Virtual cut: the candle foot pressed into the plastic sleeve', vi: 'Lát cắt ảo: chân nến được ấn vào ống nhựa' },
          { file: 'candle-pin-slice.jpg', en: 'Cross-section through the sleeve: plastic square, candle foot inside', vi: 'Mặt cắt ngang qua ống: khung nhựa vuông, chân nến bên trong' }
        ]
      },
      {
        id: 'wick',
        x: 40, y: 10,
        label: { en: 'The wick', vi: 'Bấc nến' },
        title: { en: 'The wick on top', vi: 'Bấc nến ở phía trên' },
        text: {
          en: 'At the top, the wick is bent over, as on most new candles. The scan shows that it is made of two parts: an inner multi-strand cord, surrounded by a coating — most likely wax — with a different density than the candle body. The wick is also remarkably short: it only reaches into the upper part of the candle, because a birthday candle is never meant to burn down to the bottom. In a cross-section the coating shows up as a darker disk in the candle, with the cord as a small core in its centre, so the wick can be checked at any height.',
          vi: 'Ở phía trên, bấc nến được gập sang một bên, như ở hầu hết nến mới. Bản quét cho thấy bấc gồm hai phần: một sợi lõi bện nhiều sợi bên trong, được bao quanh bởi một lớp phủ — nhiều khả năng là sáp — có mật độ khác với thân nến. Bấc nến cũng ngắn một cách đáng chú ý: nó chỉ cắm vào phần trên của cây nến, vì nến sinh nhật không bao giờ được đốt đến tận đáy. Trên mặt cắt ngang, lớp phủ hiện lên như một đĩa tối hơn trong thân nến, với sợi lõi là một lõi nhỏ ở chính giữa, nhờ vậy có thể kiểm tra bấc ở bất kỳ độ cao nào.'
        },
        zoom: { file: 'candle-wick-top.jpg', en: 'Close-up: the top of the candle with the bent wick', vi: 'Cận cảnh: đỉnh nến với bấc được gập' },
        images: [
          { file: 'candle-wick-cut.jpg',   en: 'Virtual cut: the wick inside the wax', vi: 'Lát cắt ảo: bấc nến bên trong sáp' },
          { file: 'candle-wick-3d.jpg',    en: 'The short wick on its own, separated from the candle', vi: 'Bấc nến ngắn được tách riêng khỏi thân nến' },
          { file: 'candle-wick-slice.jpg', en: 'Cross-section: the cord as a small core inside the darker coating', vi: 'Mặt cắt ngang: sợi lõi là một lõi nhỏ bên trong lớp phủ tối hơn' }
        ]
      },
      {
        id: 'voids',
        x: 52, y: 45,
        label: { en: 'The voids', vi: 'Lỗ rỗng' },
        title: { en: 'Air pockets in the wax', vi: 'Bọt khí trong sáp' },
        text: {
          en: 'Wax shrinks as it cools, and small air pockets — voids — can stay behind inside. A void analysis tailored for this study (not part of the standard software package) finds them automatically: 1,092 voids in this candle (pockets smaller than 200 voxels were not counted). Most are tiny: 636 fall into the smallest size class, while only nine are really large. The colour-coded result shows where each size class sits, so you can see at a glance whether the porosity is spread evenly or concentrated in one spot.',
          vi: 'Sáp co lại khi nguội và những bọt khí nhỏ — còn gọi là lỗ rỗng — có thể còn sót lại bên trong. Một phân tích lỗ rỗng được xây dựng riêng cho nghiên cứu này (không thuộc gói phần mềm tiêu chuẩn) tự động tìm ra chúng: 1.092 lỗ rỗng trong cây nến này (các bọt khí nhỏ hơn 200 voxel không được tính). Phần lớn rất nhỏ: 636 lỗ thuộc nhóm kích thước nhỏ nhất, trong khi chỉ có chín lỗ thực sự lớn. Kết quả được tô màu theo kích thước cho thấy vị trí của từng nhóm, giúp nhận biết ngay độ xốp phân bố đều hay tập trung tại một chỗ.'
        },
        zoom: { file: 'candle-voids-slice.jpg', en: 'Slice through the whole candle: voids show up as bright spots', vi: 'Lát cắt qua toàn bộ cây nến: lỗ rỗng hiện lên thành các đốm sáng' },
        images: [
          { file: 'candle-voids-analysis.jpg', wide: true, en: 'Void analysis: 1,092 voids in six size classes, colour-coded by size', vi: 'Phân tích lỗ rỗng: 1.092 lỗ rỗng chia thành sáu nhóm kích thước, tô màu theo kích thước' }
        ]
      }
    ]
  },

  /* ----- Earlier scans (published as "scan of the week"; archive hidden for now) ----- */
  {
    id: 'surprise-egg',
    week: 41,
    year: 2026,
    date: '2026-10-04',
    title: {
      en: 'What is inside a chocolate surprise egg?',
      vi: 'Bên trong quả trứng sô-cô-la bất ngờ có gì?'
    },
    summary: {
      en: 'A sealed chocolate egg, scanned whole. The 3D image shows the chocolate shell, the plastic capsule and the folded toy inside — without breaking anything.',
      vi: 'Một quả trứng sô-cô-la còn nguyên vỏ được quét toàn bộ. Ảnh 3D cho thấy lớp vỏ sô-cô-la, viên nang nhựa và món đồ chơi gấp gọn bên trong — mà không cần phá vỡ bất cứ thứ gì.'
    },
    story: {
      en: 'This week we put a familiar treat in the XRM prototype: a chocolate egg with a toy capsule hidden inside. Chocolate, plastic and air have very different X-ray densities, so a single scan separates all three. In the reconstruction we can virtually peel away the shell, look into the capsule and follow every part of the toy. Zooming in even reveals the small mould number "35" on one of the plastic parts and the fine grain of the chocolate wall.',
      vi: 'Tuần này, chúng tôi đặt một món quà quen thuộc vào nguyên mẫu XRM: một quả trứng sô-cô-la có viên nang đồ chơi bên trong. Sô-cô-la, nhựa và không khí có mật độ hấp thụ tia X rất khác nhau, vì vậy chỉ một lần quét đã tách biệt rõ cả ba. Trên ảnh tái tạo, chúng tôi có thể bóc lớp vỏ một cách ảo, nhìn vào bên trong viên nang và quan sát từng chi tiết của món đồ chơi. Khi phóng to, có thể thấy cả số khuôn nhỏ "35" trên một chi tiết nhựa và kết cấu hạt mịn của lớp sô-cô-la.'
    },
    use: {
      en: 'Why it matters: the same approach is used to check packaged and assembled products — food, toys, consumer goods — for completeness, correct assembly and foreign objects, without opening the package.',
      vi: 'Ý nghĩa: phương pháp này được dùng để kiểm tra sản phẩm đã đóng gói hoặc lắp ráp — thực phẩm, đồ chơi, hàng tiêu dùng — về độ đầy đủ, lắp ráp đúng và dị vật, mà không cần mở bao bì.'
    },
    settings: { kv: 50, watt: 25, projections: 1000 },
    images: [
      { file: 'egg-open.jpg',   en: 'Virtual cut through the egg: shell, capsule and toy', vi: 'Lát cắt ảo qua quả trứng: vỏ, viên nang và đồ chơi' },
      { file: 'egg-closed.jpg', en: 'The intact egg as it went into the scanner', vi: 'Quả trứng còn nguyên khi đưa vào máy quét' },
      { file: 'egg-inside.jpg', en: 'Close-up of the toy inside the capsule', vi: 'Cận cảnh đồ chơi bên trong viên nang' },
      { file: 'egg-detail.jpg', en: 'Detail: mould number "35" on a plastic part', vi: 'Chi tiết: số khuôn "35" trên chi tiết nhựa' }
    ]
  },
  {
    id: 'blister-pack',
    week: 40,
    year: 2026,
    date: '2026-10-02',
    title: {
      en: 'Tablets in a blister pack',
      vi: 'Viên thuốc trong vỉ thuốc'
    },
    summary: {
      en: 'A sealed blister strip in 3D: every cavity, every tablet and even the embossed pattern of the sealing foil.',
      vi: 'Vỉ thuốc còn niêm phong dưới dạng 3D: từng ô chứa, từng viên thuốc và cả hoa văn dập nổi trên lớp màng nhôm.'
    },
    story: {
      en: 'A short strip of a blister pack was scanned as delivered. The reconstruction shows each plastic cavity with its tablet, so fill level and tablet shape can be checked from all sides. The textured surface of the aluminium sealing foil is clearly visible, and a virtual cut shows how the tablet sits inside its pocket.',
      vi: 'Một đoạn vỉ thuốc được quét nguyên trạng. Ảnh tái tạo cho thấy từng ô nhựa cùng viên thuốc bên trong, giúp kiểm tra mức độ đầy và hình dạng viên thuốc từ mọi phía. Bề mặt có vân của lớp màng nhôm niêm phong hiện rõ, và lát cắt ảo cho thấy vị trí viên thuốc trong ô chứa.'
    },
    use: {
      en: 'Why it matters: non-destructive inspection of pharmaceutical packaging — missing or broken tablets, sealing quality — without opening a single pocket.',
      vi: 'Ý nghĩa: kiểm tra không phá hủy bao bì dược phẩm — phát hiện viên thuốc thiếu hoặc vỡ, chất lượng niêm phong — mà không cần mở bất kỳ ô nào.'
    },
    settings: { kv: 50, watt: 25, projections: 3000 },
    images: [
      { file: 'blister-3d.jpg',     en: '3D view of the blister cavities', vi: 'Hình 3D các ô của vỉ thuốc' },
      { file: 'blister-open.jpg',   en: 'Virtual cut: tablets inside their pockets', vi: 'Lát cắt ảo: viên thuốc trong ô chứa' },
      { file: 'blister-tablet.jpg', en: 'Top view of one tablet and the textured foil', vi: 'Nhìn từ trên: một viên thuốc và màng nhôm có vân' },
      { file: 'blister-side.jpg',   en: 'Side view of a single cavity', vi: 'Mặt bên của một ô chứa' }
    ]
  },
  {
    id: 'rose',
    week: 39,
    year: 2026,
    date: '2026-09-25',
    title: {
      en: 'A rose, petal by petal',
      vi: 'Bông hồng, từng cánh hoa một'
    },
    summary: {
      en: 'Soft plant tissue at low X-ray energy: the folded petals of a rose, reconstructed in full 3D.',
      vi: 'Mô thực vật mềm ở mức năng lượng tia X thấp: những cánh hoa hồng xếp lớp được tái tạo hoàn toàn dưới dạng 3D.'
    },
    story: {
      en: 'Petals are thin and contain little dense material, which makes them a good test of image contrast. Scanned at a low tube voltage of 25 kV, the rose shows its tightly packed petals, the curl of each edge and the stem — from the side and from the top.',
      vi: 'Cánh hoa mỏng và chứa rất ít vật chất có mật độ cao, nên đây là phép thử tốt cho độ tương phản hình ảnh. Khi quét ở điện áp ống thấp 25 kV, bông hồng hiện rõ các cánh hoa xếp sát nhau, độ cong của từng mép cánh và phần cuống — cả từ bên cạnh lẫn từ trên xuống.'
    },
    use: {
      en: 'Why it matters: botany, agriculture and biology often deal with soft, low-contrast samples; choosing the right energy makes their structure visible.',
      vi: 'Ý nghĩa: thực vật học, nông nghiệp và sinh học thường làm việc với mẫu mềm, độ tương phản thấp; chọn đúng mức năng lượng giúp làm rõ cấu trúc của chúng.'
    },
    settings: { kv: 25, watt: 20, projections: 3000 },
    images: [
      { file: 'rose-side.jpg', en: 'Rose seen from the side', vi: 'Bông hồng nhìn từ bên cạnh' },
      { file: 'rose-top.jpg',  en: 'Rose seen from the top', vi: 'Bông hồng nhìn từ trên xuống' }
    ]
  },
  {
    id: 'apple',
    week: 39,
    year: 2026,
    date: '2026-09-25',
    title: {
      en: 'An apple: core and seeds in 3D',
      vi: 'Quả táo: lõi và hạt dưới dạng 3D'
    },
    summary: {
      en: 'A small apple, cut open virtually: the core, the seeds and the cellular texture of the flesh.',
      vi: 'Một quả táo nhỏ được cắt ảo: lõi, hạt và kết cấu tế bào của thịt quả.'
    },
    story: {
      en: 'Fruit is mostly water, yet the scan clearly separates the seeds, the seed chambers and the porous flesh. Virtual sections can be placed anywhere, so the inside can be studied without a knife.',
      vi: 'Trái cây chủ yếu là nước, nhưng bản quét vẫn phân biệt rõ hạt, khoang hạt và phần thịt quả xốp. Có thể đặt lát cắt ảo ở bất kỳ vị trí nào để nghiên cứu bên trong mà không cần dùng dao.'
    },
    use: {
      en: 'Why it matters: food and agricultural research — ripeness, internal defects, seed development — on the same sample over time.',
      vi: 'Ý nghĩa: nghiên cứu thực phẩm và nông nghiệp — độ chín, khuyết tật bên trong, sự phát triển của hạt — trên cùng một mẫu theo thời gian.'
    },
    settings: { kv: 50, watt: 20, projections: 3000 },
    images: [
      { file: 'apple-section.jpg', en: 'Virtual section through the core', vi: 'Lát cắt ảo qua lõi quả táo' },
      { file: 'apple-3d.jpg',      en: '3D rendering of the whole apple', vi: 'Hình 3D của cả quả táo' },
      { file: 'apple-cut.jpg',     en: 'Half apple: seeds in their chambers', vi: 'Nửa quả táo: hạt trong khoang hạt' }
    ]
  }
];
