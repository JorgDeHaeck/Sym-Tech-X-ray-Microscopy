/* =========================================================
   SCAN OF THE MONTH — data file
   ---------------------------------------------------------
   This is the ONLY file to edit when a new scan of the month
   is published. The newest scan goes at the TOP of the list;
   it is shown as "Scan of the month" on the home page and on
   scan-of-the-month.html. Older entries form the archive.

   ARCHIVE: shows the earlier scans of the month (entries with a
   "month"). The older weekly scans (entries with a "week") stay
   in this file but are not shown while monthlyOnly is true.
   Set showArchive to false to hide the archive completely.

   For a new entry:
   1. Put the web images (JPG, max 1200 px, white background
      cropped) in the Images folder.
   2. Copy the first block below, paste it at the top and change:
      id, year, month, date, title, summary, story, use,
      settings, images — always both "en" and "vi".
      For a wide first image add  layout: 'landscape'.
      The zoom explorer uses the first image, or  explore: {file,en,vi}
      if given; set  frameRatio: 'width / height'  of that image and,
      if it is not tall, exploreLayout: 'landscape' or 'square'.
   3. "features" is optional. Each feature gets a numbered
      point on the first image (x / y in % of that image, from
      the top-left corner), a zoom image that fades in after
      zooming, a text and up to 3 detail images.
      Leave "features" out for a simple gallery.
   ========================================================= */
window.SCAN_OPTIONS = {
  showArchive: true,
  monthlyOnly: true
};

window.SCANS = [
  {
    id: 'walnuts',
    year: 2026,
    month: 11,
    date: '2026-10-28',
    title: {
      en: 'Fresh or old? Walnuts seen from the inside',
      vi: 'Mới hay cũ? Hạt óc chó nhìn từ bên trong'
    },
    summary: {
      en: 'From the outside, a fresh walnut and an old one look almost the same. Inside, the difference is obvious: one kernel fills its shell, the other has dried out and shrunk. We then scanned a whole cup of walnuts and measured every nut separately.',
      vi: 'Nhìn từ bên ngoài, một hạt óc chó mới và một hạt cũ gần như giống hệt nhau. Bên trong, sự khác biệt rất rõ: một nhân lấp đầy vỏ, nhân kia đã khô và co lại. Sau đó chúng tôi quét cả một cốc óc chó và đo từng hạt riêng biệt.'
    },
    story: {
      en: 'For our second scan of the month we placed two walnuts side by side in the XRM prototype: a good one and an old one. An 8-minute scan was enough to look through both shells at once. From the outside they are hard to tell apart. In the 3D reconstruction, the fresh kernel fills its shell with firm, solid lobes: 60% of the space inside the shell is kernel, 40% is air. The old kernel has dried out into thin, wrinkled layers: only 40% kernel, 60% air. In a second scan we filled a cup with seven walnuts and measured every nut separately. Explore it below.',
      vi: 'Với mẫu quét thứ hai của tháng, chúng tôi đặt hai hạt óc chó cạnh nhau trong nguyên mẫu XRM: một hạt tốt và một hạt cũ. Chỉ một lần quét 8 phút là đủ để nhìn xuyên qua cả hai lớp vỏ cùng lúc. Nhìn từ bên ngoài, rất khó phân biệt hai hạt. Trong ảnh tái tạo 3D, nhân hạt mới lấp đầy vỏ với các múi chắc và đặc: 60% không gian bên trong vỏ là nhân, 40% là không khí. Nhân hạt cũ đã khô lại thành những lớp mỏng, nhăn nheo: chỉ 40% là nhân, 60% là không khí. Trong lần quét thứ hai, chúng tôi cho bảy hạt óc chó vào một cốc và đo từng hạt riêng biệt. Hãy khám phá bên dưới.'
    },
    use: {
      en: 'Why it matters: in-shell walnuts are traded on kernel yield. Empty, shrivelled or poorly filled nuts, insect damage and mould cannot be seen from the outside, which is why nut processors now use inline X-ray sorters to reject them. Walnut breeding programmes use X-ray CT to measure kernel filling, shell thickness and air volume on hundreds of nuts without cracking them. A 3D X-ray microscope gives the detailed picture behind such measurements: to define and check sorting limits, grade samples from a lot, or compare varieties.',
      vi: 'Ý nghĩa: óc chó nguyên vỏ được mua bán dựa trên tỷ lệ nhân. Hạt rỗng, nhân teo hoặc không đầy, hư hại do côn trùng và nấm mốc không thể nhìn thấy từ bên ngoài, vì vậy các nhà chế biến hạt hiện sử dụng máy phân loại X-quang trên dây chuyền để loại bỏ chúng. Các chương trình chọn giống óc chó dùng chụp cắt lớp X-quang (CT) để đo độ đầy nhân, độ dày vỏ và thể tích không khí trên hàng trăm hạt mà không cần đập vỡ. Kính hiển vi X-quang 3D cung cấp hình ảnh chi tiết đằng sau các phép đo đó: để xác định và kiểm tra ngưỡng phân loại, đánh giá mẫu từ một lô hàng hoặc so sánh các giống.'
    },
    settings: { kv: 50, watt: 25, time: { en: '8 min', vi: '8 phút' } },
    layout: 'landscape',            // wide main images (two nuts side by side)
    explore: { file: 'nut-box-cut.jpg', en: 'A cup with seven walnuts, opened virtually', vi: 'Một cốc bảy hạt óc chó, được mở ảo' },
    teaser: [                       // the two small images on the home page
      { file: 'nut-box-top.jpg', tag: '3D', en: 'The cup of walnuts seen from above', vi: 'Cốc óc chó nhìn từ trên xuống' },
      { file: 'nut-box-chart.jpg', en: 'Air in the space inside the shell for each nut, from 63% down to 26%', vi: 'Không khí trong không gian bên trong vỏ của từng hạt, từ 63% xuống 26%' }
    ],
    exploreLayout: 'square',        // the explorer uses this image (nearly square) instead of the first image
    frameRatio: '956 / 1006',       // width / height of the explorer image
    images: [
      { file: 'nut-cut.jpg',     tag: '3D', en: '3D view – virtual cut: fresh walnut (left), old walnut (right)', vi: 'Hình 3D – lát cắt ảo: hạt óc chó mới (trái), hạt cũ (phải)' },
      { file: 'nut-outside.jpg', tag: '3D', en: '3D view – outside: the two nuts look almost the same', vi: 'Hình 3D – bên ngoài: hai hạt trông gần như giống nhau' }
    ],
    features: [
      {
        id: 'full',
        x: 50, y: 30,
        label: { en: 'A full kernel', vi: 'Nhân đầy' },
        title: { en: 'A well-filled nut', vi: 'Một hạt có nhân đầy' },
        text: {
          en: 'Seven walnuts were scanned together in one 8-minute run. The virtual cut passes through several of them at once, without opening the cup or cracking a shell. In this nut the kernel fills the shell with firm, solid lobes; only narrow gaps along the shell contain air.',
          vi: 'Bảy hạt óc chó được quét cùng lúc trong một lần quét 8 phút. Lát cắt ảo đi qua nhiều hạt cùng lúc mà không cần mở cốc hay đập vỡ vỏ. Ở hạt này, nhân lấp đầy vỏ với các múi chắc và đặc; chỉ những khe hẹp dọc theo vỏ là chứa không khí.'
        },
        zoom: { file: 'nut-cup-full.jpg', en: 'Close-up: a well-filled kernel', vi: 'Cận cảnh: một nhân đầy' },
        images: [
          { file: 'nut-box-top.jpg', tag: '3D', en: 'The cup of walnuts seen from above', vi: 'Cốc óc chó nhìn từ trên xuống' },
          { file: 'nut-cup-side.jpg', tag: '3D', en: 'Another virtual cut through the cup', vi: 'Một lát cắt ảo khác qua cốc' }
        ]
      },
      {
        id: 'shrivelled',
        x: 78, y: 19,
        label: { en: 'A shrivelled kernel', vi: 'Nhân teo' },
        title: { en: 'A shrivelled nut', vi: 'Một hạt có nhân teo' },
        text: {
          en: 'In the same cup, other nuts look very different inside: the kernel has dried out into thin, crumpled layers that no longer fill the shell, leaving large air spaces. From the outside, these nuts cannot be told apart from the good ones.',
          vi: 'Trong cùng một cốc, những hạt khác trông rất khác bên trong: nhân đã khô lại thành những lớp mỏng, nhàu nát, không còn lấp đầy vỏ và để lại nhiều khoảng trống. Nhìn từ bên ngoài, không thể phân biệt những hạt này với các hạt tốt.'
        },
        zoom: { file: 'nut-cup-shrivelled.jpg', en: 'Close-up: a shrivelled, dried-out kernel', vi: 'Cận cảnh: một nhân teo, khô' },
        images: [
          { file: 'nut-box-slices.jpg', en: 'Slices through the cup, each nut coloured by its air fraction', vi: 'Lát cắt qua cốc, mỗi hạt được tô màu theo tỷ lệ không khí' }
        ]
      },
      {
        id: 'ranking',
        x: 52, y: 50,
        label: { en: 'Nut by nut', vi: 'Từng hạt' },
        title: { en: 'Seven walnuts, graded one by one', vi: 'Bảy hạt óc chó, phân loại từng hạt' },
        text: {
          en: 'The analysis, tailored for this study (not part of the standard software package), separates every nut automatically and measures how much of the space inside each shell is air. The results range from 26% to 63%: two nuts stand out with more than 60% air, two others are well filled with less than 30%. Ranked like this, a batch can be graded against a kernel-fill limit without opening a single nut.',
          vi: 'Phân tích được xây dựng riêng cho nghiên cứu này (không thuộc gói phần mềm tiêu chuẩn) tự động tách từng hạt và đo tỷ lệ không khí trong không gian bên trong mỗi vỏ. Kết quả dao động từ 26% đến 63%: hai hạt nổi bật với hơn 60% không khí, hai hạt khác có nhân đầy với dưới 30%. Được xếp hạng như vậy, cả lô có thể được phân loại theo ngưỡng độ đầy nhân mà không cần mở một hạt nào.'
        },
        zoom: { file: 'nut-box-slices.jpg', en: 'Each nut separated and coloured by its air fraction', vi: 'Từng hạt được tách riêng và tô màu theo tỷ lệ không khí' },
        images: [
          { file: 'nut-box-chart.jpg', wide: true, en: 'Air in the space inside the shell for each numbered nut, from 63% down to 26%', vi: 'Không khí trong không gian bên trong vỏ của từng hạt được đánh số, từ 63% xuống 26%' }
        ]
      }
    ]
  },

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
