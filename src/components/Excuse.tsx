import { saveExcuse } from "../functions/saveExcuse.tsx";
import {ExcuseData} from "../Interfaces/ExcuseData.tsx";

export function Excuse(props: ExcuseData) {
    let reasonText = ""
    let reasonArray = ""
    switch(props.reason) {
        case "Brak Pracy Domowej":
            reasonText = "nie mogłem odrobić pracy domowej"
            reasonArray = "homework"
            break
        case "Spóźnienie":
            reasonText = "spóźniłem się"
            reasonArray = "late"
            break
        case "Nieobecność":
            reasonText = "byłem nieobecny"
            reasonArray = "absent"
            break
        default:
            reasonText = "nie mogłem odpisać panu na maile"
            reasonArray = "no-reply"
            break
    }

    /*
        Right -> Creativity
        Down -> Credibility
    */
    const excuses = {
        "homework": [
            ["zapomniałem", "pies mi ją zjadł", "byłem zajęty TikTokiem", "brat mi wylał na nią sok", "uprowadziło mnie UFO."],
            ["nie miałem długopisu", "zgubiłem zeszyt", "dostałem szlaban na wszystko - rodzice zabrali mi nawet długopis", "zawiesił mi się edytor tekstu", "moja praca zniknęła przez burzę magnetyczną"],
            ["miałem korepetycje i nie zdążyłem", "pomagałem rodzicom w pracy", "oddałem nie tę wersję", "zapisałem na chmurze i zniknęła", "praca zyskała świadomość i się usunęła"],
            ["zrobiłem, ale zapomniałem zeszytu", "praca była na koncie, które mi zhakowali", "napisałem ją na kartce, a pies ją zmoczył", "zrobiłem zdjęcia, ale telefon się zbrickował", "praca dostała nagrodę literacką i została wydana – muszę czekać na publikację"],
            ["mam skan pracy na mailu, ale nie miałem internetu", "oddałem koledze na sprawdzenie, i nie oddał", "mam ją, ale zapomniałem wysłać – mogę oddać teraz", "zrobiłem – ale na koniec pomyliłem klasę i wysłałem do innego nauczyciela", "praca została opublikowana przez AI i teraz muszę udowodnić autorstwo"],
        ],
        "late": [
            ["zaspałem", "nie słyszałem budzika", "była kolejka do łazienki", "telefon sam się wyłączył w nocy - budzik nie zadzwonił", "zostałem zatrzymany przez kota sąsiadów"],
            ["był korek", "autobus się spóźnił", "rower mi się rozpadł po drodze", "zgubiłem się po drodze do szkoły", "mój smartwach pomylił strefy czasowe"],
            ["musiałem odprowadzić młodsze rodzeństwo", "pomagałem starszej pani zejść po schodach", "byłem świadkiem drobnej stłuczki i musiałem zeznawać jako świadek", "drzwi do domu się zacięły", "ptak ukradł mi klucze i muiałem go śledzić"],
            ["zauważyłem pożąr i zadzwoniłem po straż", "zgubiłem buty i szukałem ich pół godziny", "zostałem przypadkiem zamknięty w windzie", "zgubiłem okulary i nie widziałem drogi", "dostałem wezwanie do misji specjalnej od kuriera"],
            ["pomogłem komuś, któ miał atak paniki", "byłem w radiu lokalnym z powodu konkursu (mistrzostw IT) i sie przeciągnęło (ciekawe kto jest mistrzem)", "nagrywałem vloga o porannych problemach", "turysta poprosił mnie o tłumaczenie ", "teleport przniósł mnie 3km za szkołę"]
        ],
        "absent": [
            ["nie chciało mi się", "zaspałem i juz nie chciało mi się przychodzić", "zapomniałem, że dziś szkoła", "grałem całą noc i nie dałem rady wstać", "czas się zatrzymał-przysięgam"],
            ["byłem zmęczony", "miałem bóle głowy", "pomyliłem dni tygodnia", "musiałem iść do urzędu", "uczestniczyłem w rodzinnym rytuale"],
            ["opiekowałem sie młodszym rodzeństwem, bo niania nie przyszła", "po drodzę miałem awarię auta i nie dało się dojechać", "musiałem pojechać z babcią do lekarza", "pies był operowany imusiałem zostać w domu", "dostałem grant na obserwację meteorytów-tylko tego dnia"],
            ["miałem szczepienie i skutki uboczne", "lekarz nagle przeniósł wizytę", "zgubiłem dokument i musiałem iść na policję", "zasłabłem po drodze i miasiąłem się zawrócić", "byłem bohaterem dnia w lokalnym schronisku"],
            ["dostałem zwolnienie od lekarza, ale nie zdążyłem przekazać", "zostałem wezwany do pomocy w szkolnym przedstawieniu", "brałem udział w mistrzostwach (jestem mistrzem)", "występowałem w konkursie artystycznym jako reprezentant szkoły", "byłem w jury ogólnopolskiego konkursu woedzy o fizyce kwantowej dla młodzieży"]
        ],
        "no-reply": [
            ["nie chciało mi się", "zapomniałem", "nie lubię pisać", "zgubiłem login", "mój kot pisał odpowiedź, ale nie umie jej wysłać"],
            ["nie widziałem wiadomości", "byłem poza zasięgiem", "mój telefon się zapsuł", "mail trafił do spamu", "przypadkiem zarchiwizowałem folder"],
            ["miałem problem z internetem", "napisaem, ale nie wysłałem-jest w wersji roboczej", "ospisałem, ale do złego odbiorcy", "serwer pocztowy miał przerwę", "mój smatwach wysłał emotkę zamiast odpowiedź"],
            ["byłem chory i nie miałem, siły nic pisać", "poczta mi sie zawieszała przez brak miejsca", "odpowiedż się nie zapisała-wyszła biała wiadomość", "zgubiłem telefon i nie miałem jak", "zhakował mnie mistrz, który uczy sie cyberbezpieczeństwa (ciekawe kto jest tym mistrzem)"],
            ["mam screena wysłanej wiadomośći, ale mail nie dotarł", "wystąpił problem, który zgłosiłem do IT, mogę pokazać zgłoszenie", "mam wiadomość w wersji roboczej, chce dosłać teraz", "załączyłem plik, ale system zablokował go przez zbyt duży rozmiar", "mail został zatrzymany przez system antyspamowy"]
        ]
    }

    const excuseText = excuses[reasonArray][props.credibility_level - 1][props.creativity_level - 1]
    const fullExcuse = `Panie ${props.name}, naprawdę mi przykro, ale ${props.date} ${reasonText}, ponieważ ${excuseText}.`
    return(
        <>
            <p>
            {fullExcuse}
            </p>
            <button
                onClick={saveExcuse(fullExcuse)}
            > Zapisz Wymówkę </button>
        </>
    )
}