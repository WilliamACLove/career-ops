# Ortak Bağlam -- career-ops (Türkçe)

<!-- ============================================================
     BU DOSYA OTOMATİK GÜNCELLENEBİLİR. Buraya kişisel veri ekleme.
     
     Özelleştirmeler modes/_profile.md dosyasına gider (hiçbir zaman
     otomatik güncellenmez). Bu dosya sistem kurallarını, puanlama
     mantığını ve her sürümde gelişen araç yapılandırmasını içerir.
     ============================================================ -->

## Temel Kaynaklar (Her değerlendirmeden önce MUTLAKA okunacak)

| Dosya | Konum | Ne zaman |
|-------|-------|----------|
| cv.md | `cv.md` (proje kök dizini) | Her zaman |
| article-digest.md | `article-digest.md` (varsa) | Her zaman — ayrıntılı kanıtlar |
| profile.yml | `config/profile.yml` | Her zaman — kişisel bilgiler ve hedef roller |
| _profile.md | `modes/_profile.md` | Her zaman — kullanıcı arketipleri, anlatı, müzakere |

**KURAL: Kanıt noktalarındaki ölçüm değerlerini ASLA sabit kodlama.** Değerlendirme sırasında bunları cv.md + article-digest.md dosyalarından oku.
**KURAL: Makale/proje metrikleri için `article-digest.md`, `cv.md`'ye göre önceliklidir.**
**KURAL: `_profile.md`'yi bu dosyadan SONRA oku. Kullanıcının `_profile.md`'deki özelleştirmeleri buradaki varsayılanları geçersiz kılar.**

---

## Puanlama Sistemi

Değerlendirme 6 blok (A-F) üzerinden yapılır ve 1-5 arası global bir puan verilir:

| Boyut | Ne ölçülüyor |
|-------|-------------|
| CV Eşleşmesi | Beceriler, deneyim ve kanıt noktalarının örtüşmesi |
| North Star Uyumu | Rolün hedef arketiplerle uyumu (`_profile.md`'den) |
| Ücret | Teklifin piyasa konumu (5=üst çeyrek, 1=çok altında) |
| Kültürel Sinyaller | Şirket kültürü, büyüme, istikrar, uzaktan çalışma politikası |
| Kırmızı Bayraklar | Engelleyiciler ve uyarılar (negatif düzeltme) |
| **Global** | Yukarıdakilerin ağırlıklı ortalaması |

**Puan yorumu:**
- 4,5+ → Güçlü eşleşme, hemen başvur
- 4,0-4,4 → İyi eşleşme, başvurmaya değer
- 3,5-3,9 → Kabul edilebilir ama ideal değil; özel bir neden olmadıkça geç
- 3,5'in altı → Başvuru önerilmez (CLAUDE.md'deki Etik Kullanım bölümüne bakın)

### Hukuki Sert Filtreler (geçti/kaldı — asla sessizce ortalamaya karıştırılmaz)

Herhangi bir boyutu ağırlıklandırmadan ÖNCE bu filtreleri kontrol et. `config/profile.yml` dosyasındaki `legal:` bloğunu okur (`class_year`, `bar_admissions`, `patent_bar`, `practice_areas`, `recruiter_channel`). Bir filtre başarısız olursa bu durum hem Kırmızı Bayraklar boyutunda hem de raporda ayrı bir satır olarak **açıkça** belirtilir — güçlü bir CV eşleşmesi asla başarısız bir filtreyi telafi etmez veya gizlemez.

1. **Baro kaydı / yeterlilik** — ilanın gerektirdiği yeterliliği adayın `legal.bar_admissions` bilgisiyle karşılaştır. Türkiye'de bir baroya kayıt, ABD eyalet barolarının aksine genellikle ülke genelinde vekillik yapma hakkı verir (şehirler arası "nakil" idari bir işlemdir, yeniden sınav gerektirmez) — bu yüzden şehir/baro uyumsuzluğu kurumsal büro ilanlarında ABD'deki eyalet barosu kadar sert bir engel değildir, ama büyük kurumsal bürolar ofisin bulunduğu şehirde kayıtlı veya kısa sürede nakil yapabilecek adayları tercih eder. Kamuda (bakanlık hukuk müşavirlikleri, düzenleyici kurumlar) görev yeri şartı olabilir; şirket içi rollerde jurisdiction neredeyse hiç engel değildir. **Not (güncel mevzuat belirsizliği):** avukatlığa giriş sınavı (ör. Hukuk Mesleklerine Giriş Sınavı/HMGS tartışmaları) son yıllarda gündemde — tam kapsam ve yürürlük tarihi hakkında emin değilsen genel ifadeler kullan ve adayı TBB (Türkiye Barolar Birliği) güncel duyurularını teyit etmeye yönlendir.
2. **Kıdem / deneyim yılı bandı** — kurumsal büro ilanları çoğu zaman bir deneyim aralığı belirtir ("3-5 yıl kıdemli avukat" gibi). Adayın kıdemi bu bandın dışındaysa, teklif aşamasında ±1 yıl civarında esneklik olabilir ama bandın belirgin şekilde dışında kalmak başvuruyu zayıflatır — bunu açıkça belirt, otomatik ret olarak abartma çünkü Türkiye piyasasında bu bant ABD class-year sistemi kadar katı uygulanmıyor.
3. **Patent/marka vekilliği** — patent başvuru/takip (patent prosecution) içeren roller TÜRKPATENT'in patent vekilliği sınavını geçmiş olmayı (genellikle teknik/mühendislik kökenli) gerektirir; bu, avukatlık ruhsatından ayrı bir yeterliliktir. `legal.patent_bar` false ise ve ilan patent vekilliği istiyorsa bu sert bir engeldir. Marka vekilliği veya sadece IP davası (dava avukatlığı) rollerinde bu şart aranmaz.
4. **Çıkar çatışması riski (kıdemli/ortak roller)** — kurumsal büyük bürolarda ortak veya kıdemli avukat adaylığı, mevcut müşteri portföyüyle çakışma (conflict) kontrolünden geçmek zorundadır. Riski raporda not et; bu bir puanlama girdisi değildir.

## İlan Meşruiyeti (Blok G)

Blok G, ilanın gerçek ve aktif bir açık pozisyon olup olmadığını değerlendirir. 1-5 global puanı **etkilemez** — ayrı bir nitel tespittir.

**Üç seviye:**
- **Güvenilir** — Gerçek, aktif ilan; sinyallerin büyük çoğunluğu olumlu
- **Dikkatli İlerle** — Karma sinyaller; bazı endişe noktaları mevcut
- **Şüpheli** — Birden fazla hayalet ilan göstergesi var; kullanıcı önce araştırmalı

**Temel sinyaller (güvenilirlik ağırlığına göre):**

| Sinyal | Kaynak | Güvenilirlik | Notlar |
|--------|--------|-------------|--------|
| İlan yaşı | Sayfa snapshot | Yüksek | 30 gün altı = iyi, 30-60 gün = karma, 60+ gün = endişe verici (rol tipine göre ayarla) |
| Başvur butonu aktif mi | Sayfa snapshot | Yüksek | Doğrudan gözlemlenebilir gerçek |
| İlanda teknik özgüllük | İlan metni | Orta | Genel ilanlar hayalet ilanla örtüşür ama zayıf yazarlıkla da açıklanabilir |
| Gereksinimlerin gerçekçiliği | İlan metni | Orta | Çelişkiler güçlü sinyal; muğlaklık daha zayıf |
| Son dönem işten çıkarma haberleri | WebSearch | Orta | Departman, zamanlama ve şirket büyüklüğü dikkate alınmalı |
| Yeniden yayın örüntüsü | scan-history.tsv | Orta | 90 günde 2+ kez aynı rol endişe verici |
| Maaş şeffaflığı | İlan metni | Düşük | Yargı bölgesine bağlı; atlanması için birçok meşru neden olabilir |
| Rol-şirket uyumu | Nitel | Düşük | Öznel; yalnızca destekleyici sinyal olarak kullan |

**Etik çerçeve (ZORUNLU):**
- Bu, kullanıcının zamanını gerçek fırsatlara yönlendirmesine yardımcı olur
- Bulguları asla dürüstsüzlük suçlaması olarak sunma
- Sinyalleri sun ve kararı kullanıcıya bırak
- Endişe veren sinyaller için her zaman meşru açıklamalara yer ver

---

## North Star — Hedef Roller

Sistem tüm hedef rollere eşit özenle yaklaşır. Maaş ve gelişim fırsatı uygunsa her biri başarıdır:

| Arketip | Odak alanları | İşverenin aradığı |
|---------|--------------|-------------------|
| **Hukuk Bürosu Avukatı — Şirketler/Ticaret Hukuku** | M&A, sermaye piyasaları, finans, proje/fon yapılandırma, deal team | Kıdem yılına uygun icra kapasitesi + işlem hacmi olan biri |
| **Hukuk Bürosu Avukatı — Dava ve Uyuşmazlık Çözümü** | Duruşma, tahkim, icra takibi, dilekçe/beyan hazırlama | Duruşma tecrübesi ve güçlü yazım becerisi olan biri |
| **Şirket İçi Hukuk Müşaviri — Ürün/Ticari/Veri Koruma** | Ticari sözleşmeler, KVKK, tedarik, iş birimleriyle iş birliği | İş birimlerine sade dille danışmanlık verebilen biri |
| **Uyum ve Mevzuat (Compliance & Regulatory)** | Mevzuat takibi, regülasyon, soruşturma, lisanslama | Düzenleyici kurum deneyimi olan, program kuran biri |
| **Kamu / Kamu Yararı Avukatlığı** | Kurum hukuk müşavirliği, kamu davası, adli yardım | Kamu hizmeti motivasyonu ve dava/işlem hacmi olan biri |
| **Hukuk Teknolojisi / Legal Engineer** | Sözleşme otomasyonu, legal ops, practice innovation | Hukuk pratiğini ürün/iş akışına çevirebilen biri |


### Arketip Tespiti

Her ilanı aşağıdaki türlerden birine (ya da en fazla ikisine) sınıflandır:

| Arketip | İlanda öne çıkan sinyaller |
|---------|---------------------------|
| Hukuk Bürosu Avukatı — Şirketler/Ticaret Hukuku | "kurumsal avukat", "şirketler hukuku", "birleşme ve devralma", "M&A", "sermaye piyasaları", "proje finansmanı", "ticari sözleşmeler", "kıdemli avukat", "deal team" |
| Hukuk Bürosu Avukatı — Dava ve Uyuşmazlık Çözümü | "dava avukatı", "duruşma", "tahkim", "icra ve iflas", "dava takibi", "yazılı savunma/beyan", "uyuşmazlık çözümü", "litigation" |
| Şirket İçi Hukuk Müşaviri — Ürün/Ticari/Veri Koruma | "şirket avukatı", "hukuk müşaviri", "ticari sözleşmeler", "tedarik sözleşmesi", "KVKK", "veri koruma", "MSA/DPA", "iş birimleriyle çalışma", "cross-functional" |
| Uyum ve Mevzuat (Compliance & Regulatory) | "uyum", "compliance", "mevzuat", "regülasyon", "MASAK", "BDDK", "SPK", "rekabet hukuku", "denetim", "soruşturma", "lisanslama" |
| Kamu / Kamu Yararı Avukatlığı | "kamu hukuk müşavirliği", "kurum avukatı", "hukuk müşaviri (kamu)", "hakim/savcı adaylığı", "adli yardım", "kamu davası", "meslek stajı (kamu)" |
| Hukuk Teknolojisi / Legal Engineer | "legal engineer", "hukuk teknolojisi", "legal tech", "sözleşme otomasyonu", "hukuk bilişimi", "legal ops", "forward-deployed attorney", "practice innovation" |

Arketipi tespit ettikten sonra kullanıcıya özgü çerçeveleme ve kanıt noktaları için `modes/_profile.md` dosyasını oku.

### Arketipe Göre Uyarlama

> **Somut rakamlar ve metrikler: değerlendirme sırasında `cv.md` ve `article-digest.md` dosyalarından okunacak. Buraya sabit yazma.**


| Rol ise... | Adayda şunu öne çıkar... | Kanıt kaynakları |
|-----------|--------------------------|-----------------|
| Şirketler/Ticaret Hukuku (Transactional) | Kıdem yılına uygun işlem listesi (deal sheet), işlem büyüklüğü, taslak hazırlama sorumluluğu | article-digest.md + cv.md |
| Dava ve Uyuşmazlık Çözümü (Litigation) | Duruşma/tahkim tecrübesi, dilekçe yazımı, dosya sonuçları | article-digest.md + cv.md |
| Şirket İçi Hukuk Müşaviri | Sözleşme hacmi, iş birimlerine danışmanlık, mevzuat genişliği | cv.md + article-digest.md |
| Uyum ve Mevzuat | Adlandırılmış rejimler, düzenleyici kurum deneyimi, soruşturma yönetimi | article-digest.md + cv.md |
| Kamu / Kamu Yararı Avukatlığı | Dava/duruşma hacmi, kamu hizmeti motivasyonu, kısıtlı kaynakla karar verme | cv.md + article-digest.md |
| Hukuk Teknolojisi / Legal Engineer | Pratik uzmanlığını ürün/iş akışı kararına çevirme, benimseme metrikleri | cv.md + article-digest.md |

### Kariyer Anlatısı (Tüm içeriklerde kullanılacak)


`config/profile.yml` dosyasındaki kariyer hikayesini tüm içeriklere zemin olarak kullan:
- **PDF özetlerinde:** Geçmişten geleceğe bir köprü kur — "Aynı [becerileri] şimdi [ilan alanına] uyguluyorum."
- **STAR hikayelerinde:** `article-digest.md`'deki somut kanıt noktalarına başvur
- **Form yanıtlarında:** Kariyer anlatısı ilk yanıtta yer almalı
- **İlan "sorumluluk alan", "dosya/işlem yöneten", "uçtan uca yürüten" diyorsa:** Bu en güçlü farklılaştırıcıdır. Eşleşme ağırlığını artır.

### Temel Güç


Profili **"Somut işlem/dava kanıtına sahip güvenilir avukat"** olarak çerçevele — arketipe göre uyarla:
- Şirketler/Ticaret Hukuku için: "Kıdem yılına uygun işlem hacmini disiplinli biçimde yürüten avukat"
- Dava ve Uyuşmazlık Çözümü için: "Baskı altında güçlü yazan, duruşmada hazır bulunan avukat"
- Şirket İçi Hukuk Müşaviri için: "İş birimlerine sade dille 'evet demenin güvenli yolunu' gösteren avukat"
- Uyum ve Mevzuat için: "Program kuran, regülatörle doğrudan muhatap olan avukat"
- Kamu/Kamu Yararı için: "Kısıtlı kaynakla yüksek hacimde dosya yöneten, kamu hizmeti motivasyonu somut olan avukat"
- Hukuk Teknolojisi/Legal Engineer için: "Pratik uzmanlığını ürüne/iş akışına çeviren avukat"

Somut işlem/dava/dosya kanıtları bu çerçevelemeyi inandırıcı kılar — kanıtsız sıfat kullanma.

### Portfolyo / Yayın / Referans Dosya

Adayın yayınlanmış bir makalesi, konuşması, ya da (gizlilik sınırları içinde tarif edilmiş) referans işlem/dava listesi varsa (`profile.yml`'ye bak), ilgili başvurularda paylaş.

### Ücret Araştırması


**Genel notlar:**
- İşveren türünü (büyük kurumsal büro / orta ölçekli büro / şirket içi / kamu / hukuk teknolojisi) önce sınıflandır, ücret güvenilirliğini buna göre değerlendir
- Büyük kurumsal hukuk bürolarında (Legal500/Chambers sıralamalı, uluslararası ağ üyesi bürolar dahil) maaş skalaları çoğunlukla yayınlanmaz — ABD'deki Cravath-tipi kamuya açık skala Türkiye'de yok; kıdem yılına göre bantlar büro içi bilgidir, güvenilirlik Düşük-Orta olarak işaretle
- Genel piyasa verisi için WebSearch kullan (Kariyer.net Maaş Rehberi, LinkedIn Maaş, Glassdoor TR) — bunlar hukuk bürosu piyasasına özgü değildir, destekleyici sinyal olarak kullan
- Serbest çalışan/danışman avukatlar için TBB (Türkiye Barolar Birliği) Avukatlık Asgari Ücret Tarifesi bir taban referansı verir; maaşlı çalışan kıyaslamasına doğrudan uygulanmaz
- Kamu kurumlarında (BDDK, SPK, Rekabet Kurumu, bakanlık hukuk müşavirlikleri) devlet memuru maaş/ek gösterge sistemi geçerlidir — kurumdan kuruma ek göstergeler farklılaşır; rakam uydurmak yerine ilgili kurumun resmi ilan/atama duyurularına yönlendir
- Rolün başlığı üzerinden karşılaştır — başlıklar maaş bantlarını belirler
- Türkiye'de maaşlar genellikle **net** olarak belirtilir; brüt/net farkı yaklaşık %25-30'dur
- Enflasyon zammı beklentisini müzakere kozu olarak kullan

---

## Türkiye İş Piyasası — Bilmen Gereken Terimler

Türkçe iş ilanlarında ve sözleşme müzakerelerinde, yabancı piyasalarda karşılığı olmayan kavramlar çıkar. Bunları doğru yorumlamak kritiktir:

| Terim | Açıklama | Değerlendirmeye etkisi |
|-------|----------|------------------------|
| **SGK** (Sosyal Güvenlik Kurumu) | Zorunlu sosyal güvenlik. İşveren ~%21,75, çalışan ~%14 prim öder | Brüt ve net maaş arasındaki farkı oluşturan ana kalem |
| **Brüt / Net Maaş** | Brüt = SGK ve gelir vergisi kesilmeden önceki tutar; Net = ele geçen | Türkiye'de teklifler genellikle **net** verilir. Karşılaştırmada aynı tabanı kullan |
| **Kıdem Tazminatı** | Her tam çalışma yılı için 1 aylık maaş (yasal tavan mevcut). İşten çıkarılma veya belirli koşullarda ödenir | Uzun vadeli paketi değerlendirirken hesaba kat. Deneme süresi bitmeden ayrılırsa ödenmez |
| **İhbar Süresi** | Yasal bildirim süresi: 0-6 ay → 2 hafta, 6 ay-1,5 yıl → 4 hafta, 1,5-3 yıl → 6 hafta, 3 yıl+ → 8 hafta | İş değişikliğinde başlangıç tarihi planlaması için kritik |
| **Deneme Süresi** | Yasal maksimum 2 ay (toplu sözleşmeyle 4 aya uzatılabilir) | Risk işareti değil — piyasa standardı. 2 ayın üzerindeyse not düş |
| **Yıllık İzin** | Kıdeme göre: 1-5 yıl → 14 gün, 5-15 yıl → 20 gün, 15+ yıl → 26 gün | 14 günün altı yasal ihlal. 20+ gün tercih edilmeli |
| **Prim / Bonus** | Performansa dayalı ek ödeme | Net baz maaşın genellikle %30-50'si kadar. Toplam paketi karşılaştırırken dahil et |
| **Yemek Kartı** | Ticket Restaurant, Sodexo veya Multinet ile sağlanan yemek yardımı | Yaygın yan hak. Aylık 5.000–7.260 TL (330 TL/gün) bandında olabilir |
| **Servis** | İşveren tarafından sağlanan toplu ulaşım | Ankara/İstanbul ofis rollerinde yaygın. Uzaktan rollerde geçersiz |
| **Özel Sağlık Sigortası** | SGK'ya ek özel sağlık güvencesi | Değerli bir yan hak; teklif karşılaştırmasında ağırlık ver |
| **Uzaktan / Hibrit Çalışma** | Tam uzaktan veya belirli günler ofiste çalışma | İlanda belirtilse bile doğrula — bazı şirketler esnek söylüyor, kültür ofis merkezli kalıyor |
| **İş Kanunu No. 4857** | Türkiye'nin temel iş kanunu | İhbar, kıdem ve izin hesaplamalarının yasal dayanağı |
| **Belirsiz / Belirli Süreli Sözleşme** | Süresiz vs. sabit vadeli iş sözleşmesi | Belirli süreli → sözleşme bitiminde kıdem tazminatı riski taşıyabilir |
| **TÜFE Zammı** | Yıllık enflasyon (TÜFE) oranına dayalı maaş artışı | Türkiye'de kritik: zam garantisi yoksa yüksek enflasyon dönemlerinde gerçek ücret erir |
| **AGİ** (Asgari Geçim İndirimi) | 2022'de kaldırıldı, yerini asgari ücrete kadar gelir vergisi muafiyeti aldı | Sözleşme müzakerelerinde ayrıca gündemin dışında tutulabilir |

### Türkiye'de Avukatlık Mesleği — Yeterlilik ve Piyasa Yapısı

Hukuki Sert Filtreler bölümünün dayandığı temel kavramlar:

| Kavram | Açıklama |
|--------|----------|
| **Hukuk fakültesi + staj** | Avukatlık mesleğine giriş: 4 yıllık hukuk fakültesi eğitimi + 1 yıllık avukatlık stajı (baro nezaretinde, mahkeme ve büro dönemleri içerir) |
| **Baro kaydı** | Staj sonunda bir baroya kayıt olunur. Kayıt genellikle ülke genelinde vekillik hakkı verir; şehirler arası nakil idari bir işlemdir. Güncel mevzuatta avukatlığa giriş sınavı tartışmaları/reformları var — kesin kapsam için TBB'nin güncel duyurularına yönlendir, sayı/tarih uydurma |
| **Kurumsal hukuk büroları** | Uluslararası ağ üyesi veya büyük ölçekli, kurumsal/ticari işlemlere odaklanan bürolar (kategori olarak an; belirli bir büronun maaş/işleyiş detayına dair emin olmadığın rakam uydurma) |
| **Kariyer basamağı (büro)** | Stajyer avukat → Avukat → Kıdemli Avukat → (bazı bürolarda) Ortak — İngilizce ilanlarda "associate/senior associate/partner" karşılığı olarak geçebilir |
| **Şirket içi unvan basamağı** | Avukat/Hukuk Müşaviri → Kıdemli Hukuk Müşaviri → Baş Hukuk Müşaviri/Hukuk Direktörü — unvan, in-house rollerde ücret pazarlığının ana kaldıracıdır |
| **Patent/marka vekilliği** | TÜRKPATENT nezdinde ayrı bir yeterlilik (patent vekilliği sınavı); avukatlık ruhsatından bağımsızdır, genelde teknik/mühendislik kökeni gerektirir |
| **KVKK** (Kişisel Verilerin Korunması Kanunu) | Türkiye'nin veri koruma mevzuatı — yurt içi odaklı rollerde GDPR yerine birincil referans olarak kullan; şirket AB'ye de hizmet veriyorsa ikisini birlikte an |
| **Uyum (Compliance) rolleri** | MASAK (kara para aklamayla mücadele), BDDK, SPK gibi düzenleyici kurumlarla etkileşimli roller; talep artan bir alan |
| **Kamu hukuk müşavirliği** | Bakanlıklar, düzenleyici kurumlar ve kamu iktisadi teşekküllerinde kurum avukatlığı — ayrı bir kariyer yolu, kamu personeli maaş sistemine tabi |
| **İş ilan panoları** | Kariyer.net (baskın), LinkedIn, Yenibiris — hukuk ilanları için de aynı panolar kullanılır, ayrı bir hukuk-özel pano yaygın değildir |

### Recruiter / İK Danışmanlığı Kanalı (çift başvuru riski)

Türkiye'de büyük kurumsal bürolar ve şirketler zaman zaman İK danışmanlık firmaları veya bağımsız recruiter'lar aracılığıyla işe alım yapar — ABD'deki kadar kurumsallaşmış ayrı bir "legal recruiter" sektörü olmasa da prensip aynıdır: **meşru bir recruiter/İK danışmanı adaydan asla ücret talep etmez** (ücret işverenden alınır); ücret isteyen "yerleştirme" teklifleri dolandırıcılık sinyalidir. Bir recruiter/İK danışmanlığı zaten bir işveren nezdinde adayın başvurusunu yapmış veya sürecini başlatmışsa, aynı işverene doğrudan (veya başka bir kanaldan) ikinci bir başvuru yapılması süreci karıştırır ve adayın elenmesine yol açabilir — `legal.recruiter_channel` ve takipçideki `via=` alanlarını her zaman kontrol et (bkz. Genel Kurallar → ASLA).

### Maaş Müzakere Kalıpları


**Maaş beklentisi:**
> "Bu rol için piyasa araştırmama göre [profile.yml'deki ARALIK] aralığını hedefliyorum. Paket konusunda esnekliğim var — önemli olan toplam teklif ve gelişim fırsatı."

**Teklif hedefin altındaysa:**
> "[Daha yüksek aralık] bandındaki tekliflerle kıyaslıyorum. [Şirket] beni çekiyor çünkü [neden]. [Hedef rakama] ulaşma şansımız var mı?"

**Enflasyon zammı için:**
> "Sözleşmeye yıllık TÜFE bazlı zam garantisi ekleyebilir miyiz? Uzun vadeli planlama açısından önemli."

### Lokasyon Politikası


**Formlarda:**
- "Ofise gelebilir misiniz?" sorularını `profile.yml`'deki gerçek duruma göre yanıtla
- Serbest metin alanlarında saat dilimi örtüşmesini ve müsaitliği açıkça yaz

**Değerlendirmelerde (puanlama):**
- Uzaktan rol → lokasyon boyutunda tam puan
- Adayın ülkesi dışında hibrit rol → **3.0** (1.0 değil)
- Yalnızca ilan açıkça "haftada 4-5 gün ofis zorunlu, istisna yok" diyorsa → **1.0**

### Teklif Hızı Önceliği

- Çalışan demo + metrikler > mükemmellik
- Erken başvur > daha fazla araştır
- %80/20 yaklaşımı, her şeyi zamanlı tut

---

## Genel Kurallar

### ASLA

1. Deneyim veya metrik uydurma
2. `cv.md` ya da portfolyo dosyalarını değiştirme
3. Adayın onayı olmadan başvuru gönderme
4. Üretilen mesajlarda telefon numarası paylaşma
5. Piyasa fiyatının altında ücret önerme
6. İlanı okumadan PDF oluşturma
7. Klişe kurumsal ifadeler kullanma ("sonuç odaklı", "dinamik takım oyuncusu" vb.)
8. Takipçiyi atlama — değerlendirilen her ilan kaydedilir
9. Bir hukuk bürosuna, orada zaten bir recruiter/İK danışmanlığı aracılığıyla adayın başvurusu yapılmış veya bu süreç başlatılmışken doğrudan başvuru hazırlama — ilk başvuruyu yapan taraf adayın adaylığını genellikle 6-12 ay boyunca "sahiplenir" (referans kaynağı kilidi) ve çift başvuru sıklıkla adayın sürecinin tamamen elenmesiyle sonuçlanır. Herhangi bir büro başvurusu hazırlamadan ÖNCE `config/profile.yml`'deki `legal.recruiter_channel` alanını ve takipçideki `via=` alanlarını MUTLAKA kontrol et

### HER ZAMAN

0. **Ön yazı:** Form izin veriyorsa HER ZAMAN ön yazı ekle. CV ile aynı görsel tasarımda PDF olarak üret. İçerik: ilandan doğrudan alıntılar + kanıt noktalarıyla eşleştirme. Maksimum 1 sayfa.
1. Herhangi bir ilanı değerlendirmeden önce `cv.md` ve `article-digest.md` dosyalarını oku (varsa)
1b. **Her oturumun ilk değerlendirmesinde:** `node cv-sync-check.mjs` çalıştır. Uyarı varsa adayı bilgilendirmeden devam etme
2. Rol arketipini belirle ve çerçevelemeyi buna göre uyarla
3. CV eşleştirmesinde dosyadan tam satır alıntıla
4. Maaş ve şirket bilgisi için WebSearch kullan
5. Değerlendirmeden sonra takipçiye kaydet
6. İçeriği ilanın dilinde üret — ilan Türkçeyse Türkçe, İngilizce ise İngilizce
7. Doğrudan ve eyleme dönük ol — gereksiz ayrıntı yazma
8. Türkçe metin üretirken: doğal Türkçe kullan, kelimesi kelimesine çeviriden kaçın. Kısa cümleler, aktif fiiller. Stack, pipeline, deploy, backend, frontend gibi yerleşik teknik terimler zorla Türkçeleştirilmemeli
8b. **PDF Professional Summary'de vaka çalışması URL'leri:** Adayın demo veya proje linki varsa ilk paragrafta göster — recruiter genellikle sadece summary'i okur
9. **Takipçi eklemeleri TSV olarak** — `applications.md`'ye doğrudan yeni satır ekleme. TSV'yi `batch/tracker-additions/` klasörüne yaz, `merge-tracker.mjs` halleder
10. Her rapor başlığına `**URL:**` alanını ekle — Puan ile PDF arasına

### Araçlar

| Araç | Kullanım |
|------|----------|
| WebSearch | Ücret araştırması (büro/şirket türüne göre kaynak seç — bkz. Ücret Araştırması), şirket/büro kültürü, Kariyer.net/LinkedIn ilanları, Türk şirket/büro haberleri |
| WebFetch | Statik sayfalardan ilan içeriği çekme |
| Playwright | İlan doğrulama (browser_navigate + browser_snapshot). **KRİTİK: Aynı anda 2+ ajan Playwright ile çalıştırma — tek browser instance paylaşılır** |
| Read | cv.md, _profile.md, article-digest.md, cv-template.html |
| Write | PDF için geçici HTML, rapor .md dosyaları, `batch/tracker-additions/*.tsv` (yeni takipçi girişleri) |
| Edit | `data/applications.md`'de mevcut satır güncellemeleri (durum, PDF, rapor bağlantısı) |
| Canva MCP | İsteğe bağlı görsel CV üretimi. Temel tasarımı çoğalt, metni düzenle, PDF olarak dışa aktar. `profile.yml`'de `canva_resume_design_id` gerektirir. |
| Bash | `node generate-pdf.mjs` |

---

## Profesyonel Yazım ve ATS Uyumluluğu

Bu kurallar adaya giden tüm üretilmiş metinler için geçerlidir: PDF özetleri, maddeler, ön yazılar, form yanıtları, LinkedIn mesajları. Dahili değerlendirme raporları için geçerli **değildir**.

### Klişe ifadelerden kaçın
- "sonuç odaklı" / "takım oyuncusu" / "kanıtlanmış başarı geçmişi"
- "leveraged" yerine → kullandığı aracı ya da fiili yaz
- "spearheaded" yerine → "yönetti" veya "kurdu"
- "facilitated" yerine → "yürüttü" veya "kurdu"
- "sinerji" / "güçlü" / "kesintisiz" / "yenilikçi" / "çığır açan"
- "günümüzün hızla değişen dünyasında"
- "kanıtlanmış yetenek" / "en iyi uygulamalar" → spesifik uygulamayı adlandır

### ATS için Unicode normalleştirme
`generate-pdf.mjs` em dash, akıllı tırnak ve sıfır genişlikli karakterleri otomatik olarak ASCII karşılıklarına dönüştürür. Yine de en başından üretmekten kaçın.

### Cümle yapısını çeşitlendir
- Her maddeye aynı fiille başlama
- Cümle uzunluklarını karıştır (kısa. Sonra bağlamlı daha uzun. Kısa.)
- Her seferinde "X, Y ve Z" kalıbını kullanma — bazen iki öğe, bazen dört

### Soyutlamalar yerine özgüllüğü tercih et
- "p95 gecikmesini 2,1 saniyeden 380ms'ye düşürdüm" → "performansı iyileştirdim"den çok daha iyi
- "12 bin belge üzerinde Postgres + pgvector ile retrieval" → "ölçeklenebilir RAG mimarisi tasarladım"dan çok daha iyi
- İzin verilen durumlarda araç, proje ve müşteri adlarını ver
