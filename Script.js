function showVerse() {
    // هذا مثال بسيط لعرض نص عند الضغط على الزر
    const verseElement = document.getElementById('verse');
    verseElement.textContent = 'بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ'; // نص الآية كمثال
}
function showVerse() {
    const verseElement = document.getElementById('verse');
    verseElement.textContent = 'بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ'; // نص الآية كمثال
}

function showHadith() {
    const hadithElement = document.getElementById('hadith-content');
    hadithElement.textContent = 'قال رسول الله صلى الله عليه وسلم: "إنما الأعمال بالنيات..."'; // نص الحديث كمثال
}

// يمكنك إضافة التحقق من صحة نموذج الاتصال هنا إذا لزم الأمر
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('تم إرسال الرسالة بنجاح!');
});
