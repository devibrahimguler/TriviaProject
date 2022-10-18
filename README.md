# TriviaProject
TRIVIA UYGULAMASI:
•	Kullanıcıların bir soru-cevap tarzında bilgi yarışması oyun oynayabileceği bir platform yapmak.
•	Uygulamanın açılış sayfasında en yüksek skor ve oyunu başlat seçeceği olmalı ve varsayılan olarak 10 soruluk, doğru yanlış şeklinde bir oyun oluşturulmalıdır.
•	Kullanıcı dilerse oyuna başlamadan oyun ayarlarını (zorluk seviyesi, doğru-yanlış/çoktan seçmeli, soru konusu) gibi kendisi belirleyebileceği bir ayar seçeceği eklenmelidir. Bu ayar ekranı açılış ekranına ya da oyunu başlat seçeneğinden sonra gösterilebilir.
•	Kullanıcı oyuna başladığında sorular sırayla gösterilmeli ve soru başına 12 saniyelik bir süre verilmelidir.
•	Süre dolduğunda o soru yanlış olarak belirlenip diğer soru ekrana gelmelidir.
•	Oyun sonunda oyuncaya skor bilgisi, doğru yanlış bilgileri gösterilmeli ve kullanıcı uygulamaya geri döndüğünde en yüksek skor bilgisi sistemde kayıtlı tutulmalıdır.

PROJE ADI 
•	TriviaProject
PROJE İÇERIĞI
•	Kullanıcıların Soru seviyesini seçip, cevapladığı ve en yüksek skorun gözüktügü bir uygulama.

GEREKSINIMLER
•	Başlangıç Ekranı ve Skor Ekranı
•	Zorluk Ekranı
•	Soru Ekranı
•	Sonuç Ekranı

EK GEREKSINIMLER
•	En yüksek skor kayıtlı olmalı

AKTÖRLER VE AKSIYONLAR
Kullanıcı
•	Zorluk Ayarlama
•	Başlatma
Kullanıcı
•	En Yüksek Skoru tutma

ADIM ADIM GÖSTERIM

1.	OYUN BAŞLATMA:
Tanım : Kullanıcı Oyunu başlatır.
Olumlu Durum:
•	Kullanıcı Oyunu Başlatır
•	Sorular Rastgele Çıkar
•	Kullanıcı sorulara cevap verir
•	Sorular biter 
•	Sonuç Ekranı Gelir
•	Kullanıcı Başa Döner
Olumsuz Durum: Kullanıcı Soruya cevap vermedi
•	Kullanıcı Oyunu Başlatır
•	Sorular Rastgele Çıkar
•	Kullanıcı sorulara cevap vermez
•	Soru Yanlış olarak işaretlenir
•	Sorular biter 
•	Sonuç Ekranı Gelir
•	Kullanıcı Başa Döner
