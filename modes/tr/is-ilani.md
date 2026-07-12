# Mod: is-ilani — Tam Değerlendirme A-G

Aday bir ilan yapıştırdığında (metin veya URL) HER ZAMAN 7 bloğun tamamını sun (A-F değerlendirme + G meşruiyet).

## Adım 0 — Arketip Tespiti

İlanı `_shared.md`'deki arketiplerden birine sınıflandır. Hibrit ise en yakın ikisini belirt. Bu tespite göre:
- B bloğunda hangi kanıt noktalarını öne çıkaracağın belirlenir
- E bloğunda CV özeti nasıl yeniden yazılacağı belirlenir
- F bloğunda hangi STAR hikayeleri hazırlanacağı belirlenir

## Adım 0,5 — Hukuki Sert Filtreler (geçti/kaldı — asla sessizce ortalamaya karıştırılmaz)

Herhangi bir puanlama yapmadan önce ilanı adayın `config/profile.yml` → `legal` bloğuna karşı kontrol et. Bunlar ağırlıklı faktörler değil, yapısal filtrelerdir — başarısız bir filtre hem Kırmızı Bayraklar boyutunda hem de nihai öneride **açıkça** görünmelidir. Güçlü bir CV eşleşmesi asla bir filtre başarısızlığını gizlemez.

1. **Baro kaydı / yeterlilik** — ilanın ofis/kurum yerini `legal.bar_admissions` ile karşılaştır. Kesinlik derecesi işveren türüne göre değişir:
   - **Kurumsal hukuk büroları: orta-sıkı.** Büyük bürolar genelde ofisin bulunduğu şehirde kayıtlı veya kısa sürede nakil yapabilecek adayları tercih eder — Türkiye'de baro kaydı ABD eyalet barosu kadar katı bir coğrafi kısıt değildir (nakil idari işlemdir), ama uyumsuzluk yine de not edilmeli.
   - **Şirket içi: minimal.** Şirket içi rollerde jurisdiction neredeyse hiçbir zaman engel değildir.
   - **Kamu: orta.** İlgili kurumun bulunduğu şehirde görev/ikamet şartı olabilir; ilanı kontrol et.
2. **Kıdem / deneyim yılı bandı** — ilan bir deneyim aralığı belirtiyorsa ("3-5 yıl kıdemli avukat" gibi), adayın `legal.class_year`'ından türetilen kıdemini bu bantla karşılaştır. Bandın belirgin şekilde dışında kalmak başvuruyu zayıflatır — bunu açıkça söyle, ama Türkiye piyasasında bu ABD class-year sistemi kadar katı uygulanmadığından "otomatik ret" dili kullanma.
3. **Patent/marka vekilliği** — ilan patent başvuru/takip (patent prosecution) istiyorsa ve `legal.patent_bar` false ise, bu sert bir engeldir (TÜRKPATENT patent vekilliği ayrı bir yeterliliktir). Marka vekilliği veya IP davası bunu gerektirmez.
4. **Çıkar çatışması riski** — kıdemli/ortak seviye rollerde, herhangi bir teklifin mevcut müşteri portföyüyle çakışma kontrolüne tabi olduğunu not et; puanlama.

Filtre sonuçlarını Blok B'nin başında kısa bir geçti/kaldı tablosu olarak raporla. Başarısız bir filtre, diğer her şey ne kadar iyi eşleşirse eşleşsin öneriyi sınırlar.

## Blok A — Rol Özeti

Şu alanları içeren bir tablo oluştur:
- Tespit edilen arketip
- Alan (şirketler hukuku / dava / şirket içi / uyum / kamu / hukuk teknolojisi)
- İşlev (danışmanlık / müzakere / dava takibi / yönetim / kurma)
- Kıdem seviyesi (kıdem yılı bandı, ya da şirket içi için unvan seviyesi)
- Çalışma şekli (tam uzaktan / hibrit / ofis)
- Takım büyüklüğü (ilanda belirtilmişse)
- 1 cümlelik TL;DR

## Blok B — CV Eşleştirmesi

`cv.md` dosyasını oku. İlandaki her gereksinimi CV'deki tam satırlarla karşılaştıran bir tablo oluştur.

**Arketipe göre öne çıkarılacaklar:**
- Şirketler/Ticaret Hukuku (Transactional) → kıdem yılına uygun işlem listesi: işlem türleri, işlem büyüklükleri, taslak hazırlama sorumluluğu, uzman iş kolu yönetimi
- Dava ve Uyuşmazlık Çözümü (Litigation) → duruşma/tahkim tecrübesi, dilekçe/beyan yazımı, dosya sonuçları, yazım gücü
- Şirket İçi Hukuk Müşaviri (Ürün/Ticari/Veri Koruma) → sözleşme hacmi (ticari sözleşme/tedarik/DPA sayıları), iş birimlerine danışmanlık, mevzuat genişliği, hukukçu olmayanlarla sade iletişim
- Uyum ve Mevzuat → adlandırılmış rejimler (MASAK, BDDK, SPK, KVKK), düzenleyici kurum deneyimi, soruşturma yönetimi, program sahipliği
- Kamu / Kamu Yararı Avukatlığı → dava/duruşma hacmi, temyiz deneyimi, kamu hizmeti motivasyonu (klinik, staj, önceki kamu deneyimi)
- Hukuk Teknolojisi / Legal Engineer → güçlü pratik geçmişi + gerçek ürün/otomasyon deneyimi — kurulan playbook'lar, otomatikleştirilen iş akışları, hukuk-teknoloji yan projeleri

**Eksikler bölümü** — her eksiklik için şunları değerlendir:
1. Sert engel mi yoksa "olsa iyi olur" mu?
2. Aday yakın bir deneyimle telafi edebilir mi?
3. Portfolyoda bu boşluğu kapatan bir proje/dosya var mı?
4. Somut azaltma planı (ön yazıda kullanılacak ifade, kısa proje vb.)

## Blok C — Seviye ve Strateji

1. **İlanda belirtilen seviye** ile **adayın bu arketip için doğal seviyesi** karşılaştırması — büro rollerinde bu kıdem yılı eşleşmesidir (bkz. Adım 0,5, sert filtre); şirket içi rollerde unvan basamağıdır (Avukat → Kıdemli Avukat → Hukuk Müşaviri → Baş Hukuk Müşaviri), unvan ücret pazarlığının ana kaldıracıdır
2. **"Kıdemliyi dürüstçe sat" planı:** Arketipe göre uyarlanmış somut ifadeler, öne çıkarılacak işlem/dosya örnekleri, büro eğitiminin veya kamu deneyiminin avantaja nasıl çevrileceği
3. **"Seviye düşürülürsem" planı:** Büro rollerinde kıdem bandı teklif aşamasında ±1 yıl civarında müzakere edilebilir; şirket içi rollerde önce unvan/seviye için, sonra rakam için müzakere et — çünkü prim hedefi ve varsa hisse bandı unvanı takip eder

## Blok D — Maaş ve Piyasa

WebSearch ile araştır — işveren türüne göre kaynak seç:
- **Kurumsal hukuk büroları:** maaş skalaları çoğunlukla yayınlanmaz (ABD'deki Cravath-tipi kamuya açık skala Türkiye'de yok); kıdem yılına göre bantlar büro içi bilgidir — güvenilirlik varsayılan olarak Düşük-Orta
- **Şirket içi:** İK danışmanlık firmalarının (varsa) yıllık maaş rehberleri, unvan basamağına göre baz + prim yapısı
- **Kamu:** devlet memuru maaş/ek gösterge sistemi — kurumdan kuruma farklılaşır, rakam uydurmak yerine ilgili kurumun resmi duyurularına yönlendir
- **Hukuk teknolojisi:** OTE/prim yapısı, hisse genelde bonus öngörülebilirliğinin yerini alır
- Genel destekleyici kaynaklar: Kariyer.net Maaş Rehberi, LinkedIn Maaş, Glassdoor TR (hukuk bürosu piyasasına özgü değil, tamamlayıcı sinyal)
- Şirketin/büronun ücret itibarı (Glassdoor/Kariyer.net yorumları varsa)
- Bu rolün Türkiye'deki talep trendi

**İşveren türü sınıflandırması (gerekli):**

| İşveren Türü | Tipik Ücret Güvenilirliği | Sinyaller |
|---|---|---|
| Büyük kurumsal hukuk bürosu (Legal500/Chambers sıralamalı, uluslararası ağ üyesi bürolar dahil) | Düşük-Orta | Maaş skalası nadiren kamuya açık; kıdem bantları büro içi bilgi; yapılandırılmış stajyer→avukat→kıdemli avukat hiyerarşisi |
| Orta ölçekli / bölgesel büro | Düşük | "Rekabetçi maaş" ifadesi standart; büyük büro skalasının bir kısmı |
| Şirket içi hukuk (kurumsal/çokuluslu şirket) | Orta-Yüksek | Yapılandırılmış unvan basamağı, baz + prim yapısı |
| Şirket içi hukuk (start-up/büyüme aşaması) | Düşük-Orta | Unvan enflasyonu olası, prim/hisse belirsiz |
| Kamu kurumu / düzenleyici kurum (BDDK, SPK, Rekabet Kurumu, bakanlık hukuk müşavirliği) | Yüksek | Yayınlanmış kadro/ek gösterge sistemi, ama piyasa rekabetçiliği düşük |
| Hukuk süreç dış kaynak (icra takip, belge inceleme büroları) | Düşük | Proje/saatlik ücretlendirme riski, "avukat" unvanıyla ilan edilse de vekillik dışı iş olabilir |
| Hukuk teknolojisi / legal-tech şirketi | Orta | OTE/prim yapısı, hisse senedi bonus öngörülebilirliğinin yerini alır |
| Recruiter / İK danışmanlık ilanı | Düşük-Orta | Üçüncü taraf ilan, aralık müşterinin bütçesini yansıtabilir; işveren belirsizse "Bilinmiyor" olarak işaretle ve varsayılan güvenilirliği Düşük'e çek |

Tablo olarak sun: veriler + kaynaklar. Veri bulunamazsa uydurmak yerine açıkça belirt. Büyük kurumsal bürolarda maaş bilgisi verilmemesi normaldir ("rekabetçi maaş" piyasa varsayılanıdır) — bunu tek başına kırmızı bayrak sayma.

**Türkiye'ye özgü kontrol listesi:**
- İlan net mi brüt mu belirtiyor?
- Yemek kartı, özel sağlık sigortası, servis var mı?
- Yıllık TÜFE bazlı zam garantisi sunuluyor mu?
- Prim/bonus yapısı nedir? (büro: yıl sonu primi; şirket içi: hedefe bağlı prim %'si)

## Blok E — Kişiselleştirme Planı

| # | CV Bölümü | Mevcut hali | Önerilen değişiklik | Gerekçe |
|---|-----------|-------------|---------------------|---------|
| 1 | Özet | ... | ... | ... |
| ... | ... | ... | ... | ... |

CV için en etkili 5 değişiklik + LinkedIn profili için en etkili 5 değişiklik.

## Blok F — Mülakat Hazırlığı

İlanın gereksinimlerine eşlenmiş 6-10 STAR+R hikayesi (STAR + **Yansıma**):

| # | İlan Gereksinimi | STAR+R Hikayesi | S | T | A | R | Yansıma |
|---|-----------------|-----------------|---|---|---|---|---------|

**Yansıma** sütunu: öğrenilen dersi veya bugün farklı yapılacak şeyi yakalar. Bu kıdemi gösterir — junior adaylar ne olduğunu anlatır, kıdemli adaylar ders çıkarır.

**Story Bank:** `interview-prep/story-bank.md` varsa bu hikayelerin orada olup olmadığını kontrol et. Yoksa ekle. Zamanla her mülakat sorusuna uyarlanabilecek 5-10 ana hikayeden oluşan yeniden kullanılabilir bir banka oluşur.

**Arketipe göre seçim ve çerçeveleme:**
- Şirketler/Ticaret Hukuku → işlem icrası, taslak hazırlama sorumluluğu, uzman iş kolu yönetimi ön planda
- Dava ve Uyuşmazlık Çözümü → dosya stratejisi, kazanılan dilekçeler/duruşmalar, baskı altında yazım ön planda
- Şirket İçi Hukuk Müşaviri → iş birimini güvenle "evet"e taşıma, hacim yönetimi, iş birimleriyle çalışma ön planda
- Uyum ve Mevzuat → program kurma, düzenleyici kurum etkileşimleri, yürütülen soruşturmalar ön planda
- Kamu / Kamu Yararı Avukatlığı → dava/duruşma hacmi, kısıtlı kaynakla karar verme, kamu hizmeti motivasyonu ön planda
- Hukuk Teknolojisi / Legal Engineer → pratik uzmanlığını ürün/iş akışı kararına çevirme, benimseme metrikleri ön planda

Ayrıca ekle:
- 1 önerilen temsili dosya/işlem (hangi dosyayı/işlemi gizlilik sınırları içinde nasıl sunacağın)
- Kırmızı bayrak sorular ve nasıl yanıtlanacağı (örn. "Bürodan neden ayrılıyorsunuz?", "Neden ortak olamadınız?", "Fatura edilebilir saat geçmişiniz nedir?", "Neden şirket içine geçiyorsunuz / neden büroya geri dönüyorsunuz?")

---

## Değerlendirme Sonrası

Bloklar A-F tamamlandıktan sonra **HER ZAMAN** şunları yap:

### 1. Rapor .md Kaydet

Değerlendirmenin tamamını `reports/{###}-{sirket-slug}-{YYYY-MM-DD}.md` olarak kaydet.

- `{###}` = sıradaki numara (3 haneli, sıfır dolgulu). Bu numarayı atomik olarak atamak ve yarış durumlarını (race condition) önlemek için, numarayı rezerve etmek üzere `node reserve-report-num.mjs` komutunu çalıştırmalısınız (standart çıktı `{###}` değerini döndürür), raporu yazmalı ve ardından sentineli serbest bırakmak için `node reserve-report-num.mjs --release {###}` komutunu çalıştırmalısınız.
- `{sirket-slug}` = şirket adı küçük harfle, boşluksuz (tire kullan)
- `{YYYY-MM-DD}` = bugünün tarihi

**Rapor formatı:**

```markdown
# Değerlendirme: {Şirket} — {Rol}

**Tarih:** {YYYY-MM-DD}
**Arketip:** {tespit edilen}
**Puan:** {X.X}/5
**URL:** {ilan URL'si}
**PDF:** ✅/❌
**Meşruiyet:** {Güvenilir | Dikkatli İlerle | Şüpheli}

---

## A) Rol Özeti
(Blok A'nın tam içeriği)

## B) CV Eşleştirmesi
(Blok B'nin tam içeriği)

## C) Seviye ve Strateji
(Blok C'nin tam içeriği)

## D) Maaş ve Piyasa
(Blok D'nin tam içeriği)

## E) Kişiselleştirme Planı
(Blok E'nin tam içeriği)

## F) Mülakat Hazırlığı
(Blok F'nin tam içeriği)

## G) İlan Meşruiyeti
(Blok G'nin tam içeriği)

## H) Başvuru Formu Taslak Yanıtları
(yalnızca puan >= 4,5 ise — form alanları için taslak yanıtlar)

---

## Çıkarılan Anahtar Kelimeler
(ATS optimizasyonu için ilandan 15-20 anahtar kelime)
```

### 2. Takipçiye Kaydet

**Yeni** kayıt için `data/applications.md`'yi doğrudan düzenleme. Bunun yerine `batch/tracker-additions/{num}-{sirket-slug}.tsv` dosyasına tek satır TSV yaz (8 veya 9 sekme ile ayrılmış sütun):

```tsv
{num}\t{date}\t{company}\t{role}\t{status}\t{score}\t{pdf_emoji}\t[{num}](reports/{num}-{slug}-{date}.md)\t{note}
```

- `{num}` = sıradaki numara (tam sayı, `reports/` klasöründen hesapla)
- `{status}` = `Evaluated`
- `{score}` = `X.X/5` formatı (örn. `4.2/5`)
- `{pdf_emoji}` = `✅` veya `❌`
- `{note}` = kısa not (isteğe bağlı, sütun atlanabilir)

Ardından `node merge-tracker.mjs` çalıştır.

**Mevcut** kayıt için `data/applications.md`'de ilgili satırı doğrudan güncelle (durum, PDF, rapor bağlantısı).

---

## İlan Meşruiyeti (Blok G)

İlanın gerçek ve aktif olup olmadığını değerlendir. Bu değerlendirme global puanı (1-5) **etkilemez** — ayrı bir nitel tespittir.

**Etik çerçeve:** Gözlemler sun, iddialarda bulunma. Her sinyalin meşru açıklaması olabilir. Kararı kullanıcı verir.

### Analiz Edilecek Sinyaller (önem sırasıyla):

**1. İlan Tazeliği** (Playwright snapshot'ından):
- Yayın tarihi veya "X gün önce" bilgisi — sayfadan çıkar
- Başvur butonu durumu (aktif / kapalı / yok / genel sayfaya yönlendiriyor)
- URL genel kariyer sayfasına yönlendirdiyse not düş

**2. İlan İçerik Kalitesi** (ilan metninden):
- Belirli pratik alanları, dosya/işlem türlerini, mahkeme/düzenleyici kurumları veya işlem hacmini adlandırıyor mu?
- Takım büyüklüğü, raporlama yapısı (kime bağlı) veya organizasyon bağlamı var mı?
- Gereksinimler gerçekçi mi? (kıdem yılı bandı vs. tanımlanan sorumluluklar)
- İlk 6-12 ay için net bir kapsam var mı?
- Maaş/ücret bilgisi var mı? (Not: büyük bürolarda bandın belirtilmemesi normaldir — yalnızca şeffaflık uygulaması olan iller/kurumlarda sinyal sayılır)
- İlanın role özgü vs. genel şablon oranı nedir?
- İç çelişki var mı? (junior kıdem bandı + kıdemli sorumluluklar, "avukat" unvanı + ortak seviyesi iş geliştirme beklentisi gibi)

**3. Şirketin İşe Alım Sinyalleri** (2-3 WebSearch sorgusu, Blok D araştırmasıyla birleştir):
- `"{şirket}" işten çıkarma {yıl}` — tarih, kapsam, departmanları not et
- `"{şirket}" işe alım dondurma {yıl}` — varsa duyuruları not et
- İşten çıkarma varsa: bu roldeki departmanı etkiliyor mu?

**4. Yeniden Yayın Tespiti** (`scan-history.tsv`'den):
- Şirket + benzer rol başlığının farklı URL ile daha önce göründüğünü kontrol et
- Kaç kez ve hangi süre içinde tekrarlandığını not et

**5. Rol Piyasa Bağlamı** (ek sorgu gerektirmez):
- Bu, genellikle 4-6 haftada dolan yaygın bir rol mü?
- Rol bu şirketin işine uygun mu?
- Kıdemli/niş bir rol (ortak, GC/Baş Hukuk Müşaviri, patent vekilliği gibi dar bir uzmanlık) meşru olarak aylarca açık kalabilir — eşikleri buna göre ayarla.

**6. Hukuk Piyasasına Özgü İlan Sinyalleri** (ilan metninden + yukarıdaki araştırmadan, ek sorgu gerektirmez):

- **İsimsiz/"gizli büyük kurumsal büro" ilanları:** İK danışmanlığı veya recruiter'lar, arkasında canlı bir mandat olmadan özgeçmiş toplamak için isimsiz ilan verebilir. İşveren adı verilmemiş, kıdem bandı belirtilmemiş ve genel ifadeler içeren bir ilan → Endişe Verici olarak ağırlıklandır. Belirli bir mandatla aktif, isimli recruiter teması ise tam tersine olumlu bir sinyaldir.
- **"Avukat" unvanıyla ilan edilen belge inceleme / icra takip işleri:** "belge inceleme", "icra dosyası takibi", "proje bazlı" gibi anahtar kelimeler; saatlik/parça başı ücretlendirme; kariyer basamağı sunmayan, gerçek ama vekillik dışı işler. Adayın bunları lateral bir kariyer fırsatı olarak değerlendirmemesi için not düş.
- **Aynı rolün 3+ recruiter/İK danışmanlığı tarafından yayınlanması:** Büro/şirket işi kontenjan piyasasında birden fazla kanala açmıştır — iş gerçek ama süreç karmaşık olabilir. Kim başvurduysa (referans kaynağı kilidi, `_shared.md`) süreci o yürütür; herhangi biri başvurmadan önce `data/scan-history.tsv` ve takipçideki `via=` alanlarını kontrol et.
- **Ücret talep eden "yerleştirme" hizmetleri:** Meşru recruiter/İK danışmanları her zaman işverenden ücret alır, adaydan asla ücret istemez. Adaydan kayıt/yerleştirme/"pazarlama" ücreti isteyen herhangi bir ilan veya teklif → Şüpheli olarak işaretle.

### Çıktı Formatı:

**Değerlendirme:** Üç seviyeden biri:
- **Güvenilir** — Birden fazla sinyal gerçek ve aktif bir ilan olduğunu gösteriyor
- **Dikkatli İlerle** — Dikkat edilmesi gereken karma sinyaller var
- **Şüpheli** — Birden fazla hayalet ilan göstergesi mevcut; zaman harcamadan önce araştır

**Sinyaller tablosu:** Her sinyal, bulgusu ve ağırlığıyla (Olumlu / Nötr / Endişe Verici).

**Bağlam Notları:** İlgili uyarılar (niş rol, kamu kurumu ilanı, sürekli açık pozisyon vb.).

**Türkiye'ye özgü sinyaller:**
- Kariyer.net / Yenibiris.com'da yayın tarihi (30 günden eski mi?)
- Şirket köklü mü yoksa yeni kurulan mı?
- İlan çok genel mi (kopyala-yapıştır şablonu gibi görünüyor mu)?
- Maaş "rekabetçi" dışında herhangi bir bilgi içeriyor mu?
- Şirkete ilişkin son dönemde işten çıkarma veya kapanma haberleri var mı?

### Özel durumlar:
- **Kamu/akademik ilanlar:** Uzun süreçler standarttır. Eşikleri ayarla (60-90 gün normal kabul edilir).
- **Sürekli açık pozisyonlar:** İlan "süregelen" veya "dönemsel alım" diyorsa not düş — bu hayalet ilan değil, pipeline rolüdür.
- **Üst düzey / niş roller:** Ortak seviyesi, GC/Baş Hukuk Müşaviri veya dar bir uzmanlık alanı (ör. fon kuruluşu, patent vekilliği) gerektiren roller meşru olarak aylarca açık kalabilir.
- **Erken aşama startup / hukuk teknolojisi girişimi:** Rol henüz tam şekillenmemiş olduğundan ilanın muğlak yazılmış olması normaldir. İçerik belirsizliğine daha az ağırlık ver.
- **Tarih bilgisi yok:** Yayın tarihi belirlenemiyorsa ve başka endişe verici sinyal yoksa varsayılan olarak "Dikkatli İlerle" kullan. Kanıt olmaksızın asla "Şüpheli" deme.
- **Recruiter kaynağı (kamuya açık ilan yok):** Tazelik sinyali alınamaz. Aktif recruiter temasının kendisinin olumlu bir meşruiyet sinyali olduğunu not et.

---

## Puanlama (1-5 global)

| Boyut | Ne ölçülüyor |
|-------|-------------|
| CV Eşleşmesi | Beceriler, deneyim ve kanıt noktalarının örtüşmesi |
| Hedef Rol Uyumu | İlanın hedef arketiplerle uyumu (`_profile.md`'den) |
| Maaş | Teklifin piyasa konumu |
| Kültürel Sinyaller | Şirket kültürü, büyüme, istikrar, çalışma şekli |
| Kırmızı Bayraklar | Engelleyiciler ve uyarılar (negatif düzeltme) |
| **Global** | Yukarıdakilerin ağırlıklı ortalaması |

**Puan yorumu:**
- 4,5+ → Güçlü eşleşme, hemen başvur
- 4,0-4,4 → İyi eşleşme, başvurmaya değer
- 3,5-3,9 → Kabul edilebilir ama ideal değil; özel bir neden olmadıkça geç
- 3,5'in altı → Başvuru önerilmez
