// =========================================
// 3. JavaScript Logic - HR Mobile Portal Ultimate PRO
// =========================================

// ===================================
// DATA MODEL - UPDATED WITH NEW DATA
// ===================================

const employeeData = [
    // ข้อมูลจากผู้ใช้: 'ออก' ถูกแปลงเป็น 'ลาออก'
    { id: "66001", status: "ลาออก", name: "นายสุรเชษฐ์ สกุลเตียว", tel: "0827093233", joinDate: "2023-01-01", leaveDate: "-" },
    { id: "66002", status: "ลาออก", name: "นายวัชรพงษ์ สมทอง", tel: "0989536504", joinDate: "2023-01-01", leaveDate: "-" },
    { id: "66003", status: "ลาออก", name: "นางพิมพ์ชนก สมทอง", tel: "0986962485", joinDate: "2023-02-01", leaveDate: "-" },
    { id: "66004", status: "ลาออก", name: "นายจิระพงษ์ จันทำ", tel: "0630671696", joinDate: "2023-03-01", leaveDate: "-" },
    { id: "66005", status: "ลาออก", name: "นายชวลิต พรหมสุวรรณ", tel: "0973613605", joinDate: "2023-04-01", leaveDate: "-" },
    { id: "66006", status: "ลาออก", name: "นายบุญส่ง ลอยเลื่อน", tel: "0950167936", joinDate: "2023-05-01", leaveDate: "-" },
    { id: "66007", status: "ลาออก", name: "นายมานพ ดอนพรไพร", tel: "0966509239", joinDate: "2023-06-01", leaveDate: "-" },
    { id: "66008", status: "ลาออก", name: "นายสุธรรม โพธิกัณหะ", tel: "0991163707", joinDate: "2023-07-01", leaveDate: "-" },
    { id: "66009", status: "ลาออก", name: "นายมานพ นัดแบน", tel: "0840248051", joinDate: "2023-08-01", leaveDate: "-" },
    { id: "66010", status: "ลาออก", name: "นายอรรถพล ภาคเมธี", tel: "0656954512", joinDate: "2023-09-01", leaveDate: "-" },
    { id: "66011", status: "ลาออก", name: "นายตระกูล ธนิตสุขการ", tel: "0848213268", joinDate: "2023-10-01", leaveDate: "-" },
    { id: "66012", status: "ลาออก", name: "นางสาวเกษนีย์ แตงประดิษฐ์", tel: "0655106978", joinDate: "2023-11-01", leaveDate: "-" },
    { id: "66013", status: "ลาออก", name: "นายกรกิต ศรีระษา", tel: "0925472420", joinDate: "2023-12-01", leaveDate: "-" },
    { id: "66014", status: "ลาออก", name: "นายเตวิช ผลพุทธ", tel: "0968738211", joinDate: "2024-01-01", leaveDate: "-" },
    { id: "66015", status: "ลาออก", name: "นายธีร์ธวัช นิยม", tel: "0825834082", joinDate: "2024-01-15", leaveDate: "-" },
    { id: "66016", status: "ลาออก", name: "นางสาวพรพิมล จันอุทะ", tel: "0954433914", joinDate: "2024-01-20", leaveDate: "-" },
    { id: "66017", status: "ลาออก", name: "นายวัชรา นามกันยา", tel: "0984040772", joinDate: "2024-01-25", leaveDate: "-" },
    { id: "66018", status: "ลาออก", name: "นายวันชัย สุรรณหงษ์", tel: "0985686610", joinDate: "2024-02-01", leaveDate: "-" },
    { id: "66019", status: "ลาออก", name: "นายวุฒิชัย ชัยเสนา", tel: "0951785378", joinDate: "2024-02-05", leaveDate: "-" },
    { id: "66020", status: "ลาออก", name: "นายศราวุฒิ พิมพ์ปรุ", tel: "0800469905", joinDate: "2024-02-10", leaveDate: "-" },
    { id: "66021", status: "ลาออก", name: "นายสหรัฐ วิระพันธ์", tel: "0835267401", joinDate: "2024-02-15", leaveDate: "-" },
    { id: "66022", status: "ลาออก", name: "นายชานนท์ คงเมือง", tel: "0623084973", joinDate: "2024-02-20", leaveDate: "-" },
    { id: "66023", status: "ลาออก", name: "นายเสนาะ ปัญยาวรรณ์", tel: "0932573651", joinDate: "2024-02-25", leaveDate: "-" },
    { id: "66024", status: "ลาออก", name: "นายอรรถ​พล​ สอน​น้อย", tel: "0645041152", joinDate: "2024-03-01", leaveDate: "-" },
    { id: "66025", status: "ลาออก", name: "นายอัศวิน ภานะรมย์", tel: "0948033948", joinDate: "2024-03-05", leaveDate: "-" },
    { id: "66026", status: "ลาออก", name: "นายเอกพล ปราณีชาติ", tel: "0821150939", joinDate: "2024-03-10", leaveDate: "-" },
    { id: "66027", status: "ลาออก", name: "นายชัยยา หัสดง", tel: "0652718833", joinDate: "2024-03-15", leaveDate: "-" },
    { id: "66028", status: "ปกติ", name: "นายมงคล ชุมพล", tel: "0633431912", joinDate: "2023-09-09" },
    { id: "66030", status: "ลาออก", name: "นางสาวกิ่งกาญจน์ ใจเสมอ", tel: "0646578098", joinDate: "2024-04-01", leaveDate: "-" },
    { id: "66031", status: "ลาออก", name: "นายอนุวัฒน์ สุวรรณกูล", tel: "0943303825", joinDate: "2024-04-05", leaveDate: "-" },
    { id: "66032", status: "ลาออก", name: "นายทนงศักดิ์ ชำนาญกิจ", tel: "0958426921", joinDate: "2024-04-10", leaveDate: "-" },
    { id: "66033", status: "ลาออก", name: "นายวัชรพงษ์ วรรณวงษ์", tel: "0815808933", joinDate: "2024-04-15", leaveDate: "-" },
    { id: "66034", status: "ลาออก", name: "นายเกรียงไกร พิมซันน์", tel: "0963237873", joinDate: "2024-04-20", leaveDate: "-" },
    { id: "66035", status: "ลาออก", name: "นายสังเวียน นิ่มละออ", tel: "0803855793", joinDate: "2024-04-25", leaveDate: "-" },
    { id: "66036", status: "ลาออก", name: "นายเกษมสันต์ ทรงเดช", tel: "0968291046", joinDate: "2024-05-01", leaveDate: "-" },
    { id: "66037", status: "ลาออก", name: "นายจักรพันธ์ แผนพนา", tel: "0653972281", joinDate: "2024-05-05", leaveDate: "-" },
    { id: "66038", status: "ลาออก", name: "นายณัฐพล แพ่งกลิ่น", tel: "0823502117", joinDate: "2024-05-10", leaveDate: "-" },
    { id: "66039", status: "ลาออก", name: "นายธนากร รุ่งแจ่มแจ้ง", tel: "0631099236", joinDate: "2024-05-15", leaveDate: "-" },
    { id: "66040", status: "ลาออก", name: "นายศิณะ วงษ์กลาง", tel: "0619812181", joinDate: "2024-05-20", leaveDate: "-" },
    { id: "66041", status: "ลาออก", name: "นางสาวทิพรัตน์ เครือแดง", tel: "0926353145", joinDate: "2024-05-25", leaveDate: "-" },
    { id: "66042", status: "ลาออก", name: "นายธีรศักดิ์ ยอดและ", tel: "0955306211", joinDate: "2024-06-01", leaveDate: "-" },
    { id: "66043", status: "ลาออก", name: "นายศุภกิตติ์ โม่งโอชา", tel: "0649610758", joinDate: "2024-06-05", leaveDate: "-" },
    { id: "66044", status: "ลาออก", name: "นายกัมปนาท ธรณีทอง", tel: "0626341076", joinDate: "2024-06-10", leaveDate: "-" },
    { id: "66045", status: "ลาออก", name: "นายสุชิน บัวเฮง", tel: "0963491497", joinDate: "2024-06-15", leaveDate: "-" },
    { id: "66046", status: "ลาออก", name: "นายจีรศักดิ์ บุญอาจ", tel: "0961892600", joinDate: "2024-06-20", leaveDate: "-" },
    { id: "66047", status: "ลาออก", name: "นายวัทนะพล พิบูลศรี", tel: "0904447850", joinDate: "2024-06-25", leaveDate: "-" },
    { id: "66048", status: "ลาออก", name: "นายศิริชัย สุรพันธ์", tel: "0811068652", joinDate: "2024-07-01", leaveDate: "-" },
    { id: "66049", status: "ลาออก", name: "นายสุคนธ์ สานุภาพ", tel: "0930960697", joinDate: "2024-07-05", leaveDate: "-" },
    { id: "66050", status: "ลาออก", name: "นายอมรวุฒิ กรงรัมย์", tel: "0968277521", joinDate: "2024-07-10", leaveDate: "-" },
    { id: "66051", status: "ลาออก", name: "นายณรงค์ชัย รักษากลิ่น", tel: "0636478618", joinDate: "2024-07-15", leaveDate: "-" },
    { id: "66052", status: "ลาออก", name: "นายวรวุฒิ แย้มมา", tel: "0807820109", joinDate: "2024-07-20", leaveDate: "-" },
    { id: "66053", status: "ลาออก", name: "นายมณเทียร พุ่มหมัน", tel: "0622318041", joinDate: "2024-07-25", leaveDate: "-" },
    { id: "66054", status: "ลาออก", name: "นายสงกรานต์ รอดทอง", tel: "0972923994", joinDate: "2024-08-01", leaveDate: "-" },
    { id: "66055", status: "ลาออก", name: "นายกิติศักดิ์ ปรางมาศ", tel: "0629359384", joinDate: "2024-08-05", leaveDate: "-" },
    { id: "66056", status: "ลาออก", name: "นายณภัทร คำจันทรา", tel: "0938986990", joinDate: "2024-08-10", leaveDate: "-" },
    { id: "66057", status: "ลาออก", name: "นายญาณวุฒิ อาจประจักษ์", tel: "0951175293", joinDate: "2024-08-15", leaveDate: "-" },
    { id: "66058", status: "ลาออก", name: "นายวชิระ กองแก้ว", tel: "0906680008", joinDate: "2024-08-20", leaveDate: "-" },
    { id: "66059", status: "ลาออก", name: "นางสาวชมพู่ ถนอมจิตร์", tel: "0839921494", joinDate: "2024-08-25", leaveDate: "-" },
    { id: "66060", status: "ลาออก", name: "นายดำรงคักดิ์ กุลสิม", tel: "0989737441", joinDate: "2024-09-01", leaveDate: "-" },
    { id: "66061", status: "ลาออก", name: "นายอนันต์ ขำสุทธิ", tel: "0955167361", joinDate: "2024-09-05", leaveDate: "-" },
    { id: "66062", status: "ลาออก", name: "นายธนพล แพงแสงสุข", tel: "0640040889", joinDate: "2024-09-10", leaveDate: "-" },
    { id: "66063", status: "ลาออก", name: "นายเกริกพล จันทร์แจ้ง", tel: "0644787957", joinDate: "2024-09-15", leaveDate: "-" },
    { id: "66064", status: "ลาออก", name: "นายพรรณกาญจน์ ไชยแสน", tel: "0627139157", joinDate: "2024-09-20", leaveDate: "-" },
    { id: "66065", status: "ลาออก", name: "นายพงษ์เทพ สีแสง", tel: "0931268638", joinDate: "2024-09-25", leaveDate: "-" },
    { id: "66066", status: "ลาออก", name: "นางสาวศศิประภา ศรีรักษ์", tel: "0909054077", joinDate: "2024-10-01", leaveDate: "-" },
    { id: "66067", status: "ลาออก", name: "นายทศพล วรรณทอง", tel: "0988086976", joinDate: "2024-10-05", leaveDate: "-" },
    { id: "66068", status: "ลาออก", name: "นายศุภโชค คงขิม", tel: "0642194623", joinDate: "2024-10-10", leaveDate: "-" },
    { id: "66069", status: "ลาออก", name: "นายณัฎฐพงศ์ ใจสมัคร์", tel: "0618468313", joinDate: "2024-10-15", leaveDate: "-" },
    { id: "66070", status: "ลาออก", name: "นายสุรเดช กาญจนพันธ์", tel: "0959798850", joinDate: "2024-10-20", leaveDate: "-" },
    { id: "66071", status: "ลาออก", name: "นายณัฐภัทร แสงศร", tel: "0930913822", joinDate: "2024-10-25", leaveDate: "-" },
    { id: "66072", status: "ลาออก", name: "นายนิยม พละบุตร", tel: "0870003711", joinDate: "2024-11-01", leaveDate: "-" },
    { id: "66073", status: "ลาออก", name: "นายพิลาพร บัวเปื่อย", tel: "0632543198", joinDate: "2024-11-05", leaveDate: "-" },
    { id: "66074", status: "ลาออก", name: "นายเพชร เพ็ชรสันทัด", tel: "0644578801", joinDate: "2024-11-10", leaveDate: "-" },
    { id: "66075", status: "ลาออก", name: "นายรุ่งรดิศฐ์ อนันต์ชสิทธิ์", tel: "0924426215", joinDate: "2024-11-15", leaveDate: "-" },
    { id: "66076", status: "ลาออก", name: "นายอนุชา สาโสภา", tel: "0940903259", joinDate: "2024-11-20", leaveDate: "-" },
    { id: "66077", status: "ลาออก", name: "นายทนงศักดิ์ แสงจันทร์", tel: "0659574463", joinDate: "2024-11-25", leaveDate: "-" },
    { id: "66078", status: "ลาออก", name: "นายเจนวิทย์ ฉวีวงษ์", tel: "0638736453", joinDate: "2024-12-01", leaveDate: "-" },
    { id: "66079", status: "ลาออก", name: "นายอานนท์ เฟื่องเพชร", tel: "0826861507", joinDate: "2024-12-05", leaveDate: "-" },
    { id: "66080", status: "ลาออก", name: "นายกิติพงษ์ รอดโฉม", tel: "0624840720", joinDate: "2024-12-10", leaveDate: "-" },
    { id: "66081", status: "ลาออก", name: "นายพัฒน์พงศ์ สิทธิพล", tel: "0966573927", joinDate: "2024-12-15", leaveDate: "-" },
    { id: "66082", status: "ลาออก", name: "นายฐราเชนทร์ ร่วมทรัพย์", tel: "0613625601", joinDate: "2024-12-20", leaveDate: "-" },
    { id: "66083", status: "ลาออก", name: "นายสมยศ นาคะพันธ์", tel: "0649814490", joinDate: "2024-12-25", leaveDate: "-" },
    { id: "66084", status: "ลาออก", name: "นายพรพิเชฐ พจนาภาส", tel: "0652303479", joinDate: "2025-01-01", leaveDate: "-" },
    { id: "66085", status: "ลาออก", name: "นายครรชิต ภาณุวัฒน์ภิญโญ", tel: "0801670685", joinDate: "2025-01-05", leaveDate: "-" },
    { id: "66086", status: "ลาออก", name: "นายณัฐดนัย พูลศิลป์", tel: "0825239391", joinDate: "2025-01-10", leaveDate: "-" },
    { id: "66087", status: "ลาออก", name: "นายทิวา สมหวัง", tel: "0804799640", joinDate: "2025-01-15", leaveDate: "-" },
    { id: "66088", status: "ลาออก", name: "นายสุชาติ ตาสี", tel: "0838203895", joinDate: "2025-01-20", leaveDate: "-" },
    { id: "66089", status: "ลาออก", name: "นายกิตติศักดิ์ ชูแสง", tel: "0812517506", joinDate: "2025-01-25", leaveDate: "-" },
    { id: "66090", status: "ลาออก", name: "นายกิตติศักดิ์ ยวงหิรัญ", tel: "0990290257", joinDate: "2025-02-01", leaveDate: "-" },
    { id: "66091", status: "ลาออก", name: "นายฉัตรชัย ภู่แกมแก้ว", tel: "0962723046", joinDate: "2025-02-05", leaveDate: "-" },
    { id: "66092", status: "ปกติ", name: "นายภาณุเดช ศรีเมือง", tel: "0960562851", joinDate: "2024-07-27" },
    { id: "66093", status: "ลาออก", name: "นายฉัตรชัย ศรีสุข", tel: "0955013683", joinDate: "2025-02-15", leaveDate: "-" },
    { id: "66094", status: "ลาออก", name: "นายจำเนียน พวงพันธ์", tel: "0611431840", joinDate: "2025-02-20", leaveDate: "-" },
    { id: "66095", status: "ลาออก", name: "นายโยธิน มาศจรัส", tel: "0971320368", joinDate: "2025-02-25", leaveDate: "-" },
    { id: "66096", status: "ลาออก", name: "นายทิวากร อยู่เบี้ยว", tel: "0960562851", joinDate: "2025-03-01", leaveDate: "-" },
    { id: "66097", status: "ลาออก", name: "นายชนกานต์ คล้าเอม", tel: "0992743272", joinDate: "2025-03-05", leaveDate: "-" },
    { id: "66098", status: "ลาออก", name: "นายวิโรจน์ รักสงบ", tel: "0930654575", joinDate: "2025-03-10", leaveDate: "-" },
    { id: "66099", status: "ลาออก", name: "นายสมศักดิ์ เลิศล้ำรัตน์", tel: "0962353414", joinDate: "2025-03-15", leaveDate: "-" },
    { id: "66100", status: "ลาออก", name: "นายนวพรรษ ผลใหม่", tel: "0642098228", joinDate: "2025-03-20", leaveDate: "-" },
    { id: "66101", status: "ลาออก", name: "นายอนุวัฒน์ โพธิ์ศรี", tel: "0960756748", joinDate: "2025-03-25", leaveDate: "-" },
    { id: "66102", status: "ลาออก", name: "นายสุริยา ซ้อนรัมย์", tel: "0985709308", joinDate: "2025-04-01", leaveDate: "-" },
    { id: "66103", status: "ลาออก", name: "นายขจรวิทย์ นาคทั่ง", tel: "0924837579", joinDate: "2025-04-05", leaveDate: "-" },
    { id: "66104", status: "ลาออก", name: "นายพลพิพัฒน์ รักษาสัตย์", tel: "0831395145", joinDate: "2025-04-10", leaveDate: "-" },
    { id: "66105", status: "ลาออก", name: "นายสังขกร ธัญญาโภชน์", tel: "0952563076", joinDate: "2025-04-15", leaveDate: "-" },
    { id: "66106", status: "ลาออก", name: "นายธนวัฒน์ หงษ์เวียงจันทร์", tel: "0923649640", joinDate: "2025-04-20", leaveDate: "-" },
    { id: "66107", status: "ลาออก", name: "นายคมกริช สมวัลย์", tel: "0820090041", joinDate: "2025-04-25", leaveDate: "-" },
    { id: "66108", status: "ลาออก", name: "นายภานุเดช ลูกอินทร์", tel: "0930265893", joinDate: "2025-05-01", leaveDate: "-" },
    { id: "66109", status: "ลาออก", name: "นายสมิทร์ จันทร์ภักดี", tel: "0653433321", joinDate: "2025-05-05", leaveDate: "-" },
    { id: "66110", status: "ลาออก", name: "นายศิววุฒิ ชุลีวันท์", tel: "0966658768", joinDate: "2025-05-10", leaveDate: "-" },
    { id: "66111", status: "ลาออก", name: "นายจักรพรรดิ์ เมืองช้าง", tel: "0919040286", joinDate: "2025-05-15", leaveDate: "-" },
    { id: "66112", status: "ลาออก", name: "นายกิตติพงศ์ จันส่ง", tel: "0955941140", joinDate: "2025-05-20", leaveDate: "-" },
    { id: "66113", status: "ลาออก", name: "นายนนธิชัย สำอางค์", tel: "0960295683", joinDate: "2025-05-25", leaveDate: "-" },
    { id: "66114", status: "ลาออก", name: "นายทวิชาติ จิ๋วแหยม", tel: "0648627012", joinDate: "2025-06-01", leaveDate: "-" },
    { id: "66115", status: "ลาออก", name: "นางสาวอรอินทรสุดา พัฒนเจริญอมร", tel: "0942202264", joinDate: "2025-06-05", leaveDate: "-" },
    { id: "66116", status: "ลาออก", name: "นายณัฐพล สงวนชิต", tel: "0645075702", joinDate: "2025-06-10", leaveDate: "-" },
    { id: "66117", status: "ลาออก", name: "นายสราวุฒิ บัวทอง", tel: "0979490342", joinDate: "2025-06-15", leaveDate: "-" },
    { id: "66118", status: "ลาออก", name: "นายสิทธิชาติ เจริญยิ่ง", tel: "0929887091", joinDate: "2025-06-20", leaveDate: "-" },
    { id: "66119", status: "ลาออก", name: "นายมณฑล ปราณอมรกิจ", tel: "0649623615", joinDate: "2025-06-25", leaveDate: "-" },
    { id: "66120", status: "ลาออก", name: "นายสมยศ ปานทอง", tel: "0820835952", joinDate: "2025-07-01", leaveDate: "-" },
    { id: "66121", status: "ลาออก", name: "นายมนัสศักดิ์ ทาบทา", tel: "0614266078", joinDate: "2025-07-05", leaveDate: "-" },
    { id: "66122", status: "ลาออก", name: "นายเจษฎา สุขแก้ว", tel: "0650258291", joinDate: "2025-07-10", leaveDate: "-" },
    { id: "66123", status: "ปกติ", name: "นายคมกฤษ อินทร์วงศ์", tel: "0659727038", joinDate: "2025-02-06" },
    { id: "66124", status: "ลาออก", name: "นายรังสรรค์ ง้วนพันธ์", tel: "0808718920", joinDate: "2025-07-20", leaveDate: "-" },
    { id: "66125", status: "ลาออก", name: "นายธนวัฒน์ จักรเพชร", tel: "0650348126", joinDate: "2025-07-25", leaveDate: "-" },
    { id: "66126", status: "ลาออก", name: "นายชเนศ จ้อยร่อย", tel: "0848843407", joinDate: "2025-08-01", leaveDate: "-" },
    { id: "66127", status: "ลาออก", name: "นายนัฐพล บุญประดับ", tel: "0625196839", joinDate: "2025-08-05", leaveDate: "-" },
    { id: "66128", status: "ปกติ", name: "นายกิตติพัทพ์ วชิระกิจชัย (ผู้ก่อตั้ง)", tel: "0962685575", joinDate: "2018-06-13" },
    { id: "66129", status: "ปกติ", name: "นายชูชาติ แดงศรี", tel: "0838054231", joinDate: "2025-02-24" },
    { id: "66130", status: "ลาออก", name: "นายอรรถพล ชาโท", tel: "0918765595", joinDate: "2025-08-20", leaveDate: "-" },
    { id: "66131", status: "ปกติ", name: "นายธนดล ครองชัย", tel: "0646600470", joinDate: "2025-03-01" },
    { id: "66132", status: "ลาออก", name: "นายสรวิชญ์ จันทร์ไข่", tel: "0621248869", joinDate: "2025-09-01", leaveDate: "-" },
    { id: "66133", status: "ลาออก", name: "นายอมร โพธิ์ต่ำ", tel: "0826580811", joinDate: "2025-09-05", leaveDate: "-" },
    { id: "66134", status: "ลาออก", name: "นายยุทธนา เกษประสิทธิ์", tel: "0965751105", joinDate: "2025-09-10", leaveDate: "-" },
    { id: "66135", status: "ลาออก", name: "นายทนงศักดิ์ บุญเรืองฤทธิ์", tel: "0639354058", joinDate: "2025-09-15", leaveDate: "-" },
    { id: "66136", status: "ลาออก", name: "นายโกศล ตั้งรัศมี", tel: "0643348724", joinDate: "2025-09-20", leaveDate: "-" },
    { id: "66137", status: "ลาออก", name: "นายราเชน เทียนอินทร์", tel: "0988545049", joinDate: "2025-09-25", leaveDate: "-" },
    { id: "66138", status: "ลาออก", name: "นายสมจิตร ผาสุข", tel: "0643549948", joinDate: "2025-10-01", leaveDate: "-" },
    { id: "66139", status: "ลาออก", name: "นายดวง ชูรัศมี", tel: "0610079885", joinDate: "2025-10-05", leaveDate: "-" },
    { id: "66140", status: "ปกติ", name: "นายอภิสิทธิ์ ประชาชน", tel: "0611147500", joinDate: "2025-04-16" },
    { id: "66141", status: "ปกติ", name: "นายธนวิต เสนานิมิตร", tel: "0613483304", joinDate: "2025-08-01" },
    { id: "66142", status: "ลาออก", name: "นายอดุลย์เดชา สังขวรรณ", tel: "0826188544", joinDate: "2025-10-20", leaveDate: "-" },
    { id: "66143", status: "ลาออก", name: "นายภัทราวุธ อินทรสูต", tel: "0640081374", joinDate: "2025-10-25", leaveDate: "-" },
    { id: "66144", status: "ปกติ", name: "นายเอกชัย พูลทรัพย์", tel: "0863870611", joinDate: "2025-05-05" },
    { id: "66145", status: "ลาออก", name: "นายรังสรรค์ อ่อนเลิศ", tel: "0654569076", joinDate: "2025-11-05", leaveDate: "-" },
    { id: "66146", status: "ปกติ", name: "นายตระกูล เปล่งศรีงาม", tel: "0929744760", joinDate: "2025-05-14" },
    { id: "66147", status: "ปกติ", name: "นางละมูล เปล่งศรีงาม", tel: "0929744760", joinDate: "2025-05-17" },
    { id: "66148", status: "ลาออก", name: "นายกวีวุฒิ คล้ายสังข์", tel: "0616614143", joinDate: "2025-11-20", leaveDate: "-" },
    { id: "66149", status: "ลาออก", name: "นายทรงพล เสาวภายนต์", tel: "0855645045", joinDate: "2025-11-25", leaveDate: "-" },
    { id: "66150", status: "ลาออก", name: "นายธวัทชัย หมายมั่น", tel: "0811081878", joinDate: "2025-12-01", leaveDate: "-" },
    { id: "66151", status: "ลาออก", name: "นายกัมพล โรจน์พงศ์เกษม", tel: "0624924263", joinDate: "2025-12-05", leaveDate: "-" },
    { id: "66152", status: "ปกติ", name: "นายมงคล พงษ์อัคคศิรา", tel: "0637986203", joinDate: "2025-06-04" },
    { id: "66153", status: "ปกติ", name: "นายธนพล โตอุตชนม์", tel: "0968608653", joinDate: "2025-07-03" },
    { id: "66154", status: "ลาออก", name: "นายศิริชัย ประพันธ์พจน์", tel: "0984749175", joinDate: "2025-12-20", leaveDate: "-" },
    { id: "66155", status: "ลาออก", name: "นางสาวเมตตา สุขสงวน", tel: "0979373766", joinDate: "2025-12-25", leaveDate: "-" },
    { id: "66156", status: "ปกติ", name: "นายชนะชัย ฉายเพชร", tel: "0918077304", joinDate: "2026-08-13" },
    { id: "66157", status: "ลาออก", name: "นายนิพัฒน์ จันทร์ผ่อง", tel: "0624656818", joinDate: "2026-01-05", leaveDate: "-" },
    { id: "66158", status: "ปกติ", name: "นายมาโนชญ์ พันธ์คำ", tel: "0863787091", joinDate: "2026-09-15" },
    { id: "66159", status: "ปกติ", name: "นายทิวากร อยู่เบี้ยว", tel: "0960562851", joinDate: "2026-09-10" },
];

const blacklistData = [
    { name: "นายอิงครัด ศรีสอาด", date: "2025-05-01", reason: "พูดจากไม่สุภาพ, นักเลง", ref: "BL-001", imagePath: 'ไม่มีข้อมูล' },
    { name: "นายสุธรรม โพธิกัณหะ", date: "2025-05-05", reason: "ใส่รองเท้าแตะ พื้นที่คลัง, ไม่ส่งเอกสาร", ref: "BL-002", imagePath: 'evidence_002.jpg' },
    { name: "นายสหรัฐ วิระพันธ์", date: "2025-05-10", reason: "รถชอบมีปัญหา, หาแต่เรื่องให้บริษัท", ref: "BL-003", imagePath: 'evidence_003.jpg' },
    { name: "นายวันชัย สุรรณหงษ์", date: "2025-05-15", reason: "ตักเตือน (ไม่ระบุรายละเอียด)", ref: "BL-004", imagePath: 'evidence_004.jpg' },
    { name: "นายพิทักษ์ ธารณะกลาง", date: "2025-05-20", reason: "ทิ้งงานกะทันหัน", ref: "BL-005", imagePath: 'evidence_005.jpg' },
    { name: "นายอนุกูล สิงหาภู", date: "2025-05-25", reason: "ทิ้งงานกะทันหัน", ref: "BL-006", imagePath: 'evidence_006.jpg' },
    { name: "นายมานพ นัดแบน", date: "2025-06-01", reason: "ทิ้งงานกะทันหัน", ref: "BL-007", imagePath: 'evidence_007.jpg' },
    { name: "นางพิมพ์ชนก สมทอง", date: "2025-06-05", reason: "ทิ้งงานกะทันหัน", ref: "BL-008", imagePath: 'evidence_008.jpg' },
    { name: "นายวัชรพงษ์ สมทอง", date: "2025-06-10", reason: "ทิ้งงานกะทันหัน", ref: "BL-009", imagePath: 'evidence_009.jpg' },
    { name: "สุทธิสม กุดเสนา", date: "2025-06-15", reason: "ลักขโมยท่อแคทไปขาย", ref: "BL-010", imagePath: 'evidence_010.jpg' },
    { name: "นายดำรงคักดิ์ กุลสิม", date: "2025-06-20", reason: "มีสารเสพติด", ref: "BL-011", imagePath: 'evidence_011.jpg' },
    { name: "นายธีรศักดิ์ ยอดและ", date: "2025-06-25", reason: "ติดต่อไม่ได้", ref: "BL-012", imagePath: 'evidence_012.jpg' },
    { name: "นางสาวชมพู่ ถนอมจิตร์", date: "2025-07-01", reason: "ติดต่อไม่ได้", ref: "BL-013", imagePath: 'evidence_013.jpg' },
    { name: "นายเพชร เพ็ชรสันทัด", date: "2025-07-05", reason: "ทิ้งงาน", ref: "BL-014", imagePath: 'evidence_014.jpg' },
    { name: "นายณัฐภัทร แสงศร", date: "2025-07-10", reason: "ทิ้งงาน", ref: "BL-015", imagePath: 'evidence_015.jpg' },
    { name: "นางสาวศศิประภา ศรีรักษ์", date: "2025-07-15", reason: "ทิ้งงาน", ref: "BL-016", imagePath: 'evidence_016.jpg' },
    { name: "นายอานนท์ เฟื่องเพชร", date: "2025-07-20", reason: "ทิ้งงาน", ref: "BL-017", imagePath: 'evidence_017.jpg' },
    { name: "สมยศ นาคะพันธ์", date: "2025-07-25", reason: "ทิ้งงาน", ref: "BL-018", imagePath: 'evidence_018.jpg' },
    { name: "นายฐราเชนทร์ ร่วมทรัพย์", date: "2025-08-01", reason: "ทิ้งงาน/ได้เงินแล้วไม่วิ่งงาน", ref: "BL-019", imagePath: 'evidence_019.jpg' },
    { name: "นายกิติพงษ์ รอดโฉม", date: "2025-08-05", reason: "ทิ้งงาน", ref: "BL-020", imagePath: 'evidence_020.jpg' },
    { name: "ชานนทร์ อุดมผล", date: "2025-08-10", reason: "ทิ้งงาน/ได้เงินแล้วไม่วิ่งงาน", ref: "BL-021", imagePath: 'evidence_021.jpg' },
    { name: "นายพรพิเชฐ พจนาภาส", date: "2025-08-15", reason: "ทิ้งงาน/เอาเงินไป 1300", ref: "BL-022", imagePath: 'evidence_022.jpg' },
    { name: "นายทิวา สมหวัง", date: "2025-08-20", reason: "ขโมยแคท", ref: "BL-023", imagePath: 'evidence_023.jpg' },
    { name: "พงษ์ศักดิ์ สุขศรี", date: "2025-08-25", reason: "ทิ้งงาน จอดรถทิ้งไว้ที่สาขา", ref: "BL-024", imagePath: 'evidence_024.jpg' },
    { name: "สหรัฐ เสม็ดดี", date: "2025-09-01", reason: "ทิ้งงาน", ref: "BL-025", imagePath: 'evidence_025.jpg' },
    { name: "นายณรงค์ชัย รักษากลิ่น", date: "2025-09-05", reason: "ทิ้งงาน หลับบ่อย รับมาทำงาน 2 ครั้งแล้ว", ref: "BL-026", imagePath: 'evidence_026.jpg' },
    { name: "ปริญญา หาทอง", date: "2025-09-10", reason: "ทิ้งงาน ขโมยรถติดต่อไม่ได้", ref: "BL-027", imagePath: 'evidence_027.jpg' },
    { name: "นายกิตติศักดิ์ ยวงหิรัญ", date: "2025-09-15", reason: "ทิ้งงาน ขโมยรถติดต่อไม่ได้", ref: "BL-028", imagePath: 'evidence_028.jpg' },
    { name: "นายฉัตรชัย ศรีสุข", date: "2025-09-20", reason: "ทิ้งงาน ขโมยรถติดต่อไม่ได้", ref: "BL-029", imagePath: 'evidence_029.jpg' },
    { name: "นายสมยศ นาคะพันธ์", date: "2025-09-25", reason: "ทิ้งงาน", ref: "BL-030", imagePath: 'evidence_030.jpg' },
    { name: "นายณัฐดนัย พูลศิลป์", date: "2025-10-01", reason: "ทิ้งงาน", ref: "BL-031", imagePath: 'evidence_031.jpg' },
    { name: "นายทนงศักดิ์ แสงจันทร์", date: "2025-10-05", reason: "ลาออกกระทันหัน", ref: "BL-032", imagePath: 'evidence_032.jpg' },
    { name: "นายเจนวิทย์ ฉวีวงษ์", date: "2025-10-10", reason: "ทิ้งงาน", ref: "BL-033", imagePath: 'evidence_033.jpg' },
    { name: "นายอนุวัฒน์ โพธิ์ศรี", date: "2025-10-15", reason: "ไม่มาทำงาน", ref: "BL-034", imagePath: 'evidence_034.jpg' },
    { name: "นายภัทราวุธ อินทรสูต", date: "2025-10-20", reason: "กวนตีน", ref: "BL-035", imagePath: 'evidence_035.jpg' },
];


// ===================================
// Dashboard Rendering Logic
// ===================================
function renderDashboard() {
    const totalEmployees = employeeData.length;
    const activeEmployees = employeeData.filter(emp => emp.status === 'ปกติ').length;
    const resignedEmployees = employeeData.filter(emp => emp.status === 'ลาออก').length;
    const blacklistCount = blacklistData.length; 

    const dashboardContainer = document.getElementById('stats-dashboard');
    dashboardContainer.innerHTML = '';

    const stats = [
        { title: "พนักงานทั้งหมด", value: totalEmployees, class: "stat-total", icon: "fas fa-users" },
        { title: "สถานะปกติ", value: activeEmployees, class: "stat-active", icon: "fas fa-user-check" },
        { title: "ลาออกแล้ว", value: resignedEmployees, class: "stat-left", icon: "fas fa-user-times" },
        { title: "บัญชีดำ", value: blacklistCount, class: "stat-blacklist", icon: "fas fa-ban" },
    ];

    stats.forEach(stat => {
        const card = document.createElement('div');
        card.className = `stat-card ${stat.class} card-shadow`;
        card.innerHTML = `
            <h3><i class="${stat.icon}"></i> ${stat.title}</h3>
            <p class="stat-value">${stat.value}</p>
        `;
        dashboardContainer.appendChild(card);
    });
}

// ===================================
// Blacklist Rendering Logic
// ===================================
function renderBlacklist() {
    const listContainer = document.getElementById('blacklist-display');
    listContainer.innerHTML = ''; 

    if (blacklistData.length === 0) {
        listContainer.innerHTML = '<li style="text-align: center; color: var(--secondary-color); padding: 40px;">ไม่มีรายการในทะเบียนบัญชีดำ</li>';
        return;
    }

    blacklistData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'blacklist-item card-shadow';
        
        // ใช้ปุ่มใหม่ view-evidence พร้อม alert แสดงรูปภาพ
        listItem.innerHTML = `
            <div class="item-header-emp">
                <span class="bl-name">${item.name}</span>
                <span class="emp-status status-ลาออก">BLACKLISTED</span>
            </div>
            <div class="emp-detail-row">
                <label>รหัสอ้างอิง:</label>
                <span style="font-family: 'Poppins', sans-serif;">${item.ref}</span>
            </div>
            <p class="bl-reason">**เหตุผล:** ${item.reason}</p>
            <div class="bl-action-bar">
                 <button class="action-btn view-evidence" onclick="alert('แสดงรูปภาพหลักฐาน: ${item.imagePath} สำหรับเคส ${item.name}')">
                    <i class="fas fa-camera"></i> View Evidence
                </button>
            </div>
        `;
        listContainer.appendChild(listItem);
    });
}

// ===================================
// Employee List Rendering Logic
// ===================================
function renderEmployeeList(data) {
    const listContainer = document.getElementById('employee-list');
    listContainer.innerHTML = ''; 

    if (data.length === 0) {
        listContainer.innerHTML = `
            <li style="text-align: center; color: var(--secondary-color); padding: 40px; border: 1px dashed #CED4DA; border-radius: 8px;">
                ไม่พบข้อมูลพนักงานในสถานะนี้ 😔
            </li>`;
        return;
    }

    data.forEach(emp => {
        const listItem = document.createElement('li');
        const statusClass = `status-${emp.status}`;
        listItem.className = `employee-item card-shadow ${statusClass}`; 
        
        let detailInfo = '';
        if (emp.status === 'ลาออก' && emp.leaveDate) {
            // เพิ่มวันที่ลาออกสำหรับพนักงานที่ลาออก
            detailInfo = `<div class="emp-detail-row"><label>วันลาออก:</label><span>${emp.leaveDate}</span></div>`;
        } else if (emp.status === 'ปกติ' && emp.joinDate) {
             // เพิ่มวันที่เริ่มงานสำหรับพนักงานปกติ
            detailInfo = `<div class="emp-detail-row"><label>วันที่เริ่มงาน:</label><span>${emp.joinDate}</span></div>`;
        }

        listItem.innerHTML = `
            <div class="item-header-emp">
                <span class="emp-name-main">${emp.name}</span>
                <span class="emp-status ${statusClass}">${emp.status}</span>
            </div>
            <div class="emp-detail-row">
                <label>รหัสพนักงาน:</label>
                <span style="font-family: 'Poppins', sans-serif; font-weight: 600;">${emp.id}</span>
            </div>
            ${detailInfo}
            <div class="emp-detail-row">
                <label>เบอร์ติดต่อ:</label>
                <span><a href="tel:${emp.tel}">${emp.tel}</a></span>
            </div>
        `;
        listContainer.appendChild(listItem);
    });
}

/**
 * ฟังก์ชันกรองข้อมูลพนักงานตามสถานะที่เลือก
 * @param {string} filterValue - ค่าสถานะที่ต้องการกรอง
 */
function filterEmployees(filterValue) {
    let filteredData = employeeData;

    if (filterValue !== 'all') {
        filteredData = employeeData.filter(emp => emp.status === filterValue);
    }
    
    renderEmployeeList(filteredData);
}

// ===================================
// DOM Content Loaded - Main Logic
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Logic การสลับแท็บ
    const tabBar = document.querySelector('.tab-bar');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBar.addEventListener('click', function(event) {
        const link = event.target.closest('.tab-link');
        if (!link) return;

        document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));
        
        link.classList.add('active');
        const targetId = link.getAttribute('data-tab');
        const targetPanel = document.getElementById(targetId);
        
        if (targetPanel) {
            targetPanel.classList.add('active');
            document.querySelector('.content-wrapper').scrollTop = 0;
        }
    });

    // 2. Initial Data Loading
    renderDashboard();
    renderBlacklist();
    filterEmployees('all'); 

    // 3. Logic การกรองด้วย Button Toggle
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            filterEmployees(filterValue);
        });
    });

    // 4. Placeholder for Settings Button and Report Button
    document.querySelector('.settings-btn').addEventListener('click', () => {
        alert('เปิดหน้าต่างตั้งค่าระบบ (Future Feature)');
    });

    // ตรวจสอบว่าปุ่มมีอยู่ก่อนเรียกใช้
    const reportBtn = document.querySelector('.view-report');
    if (reportBtn) {
        reportBtn.addEventListener('click', () => {
            alert('กำลังโหลดรายงานฉบับเต็ม...');
        });
    }
});