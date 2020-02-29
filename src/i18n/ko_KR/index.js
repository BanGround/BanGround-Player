export default {
    public: {
        radioOn: 'On',
        radioOff: 'Off',
        cancel: '취소',
        ok: '확인',
        language: '언어',
        inputValue: '값을 입력해 주세요',
        fullscreen: {
            title: '전체화면 모드',
            succeeded: '스마트폰의 자동회전 기능을 켠 후, 스마트폰을 가로로 들어주세요',
            failed: '전체화면 모드 에러. 권한을 확인 해주세요',
            unsupported: '웹 브라우저가 전체화면 모드를 지원하지 않습니다'
        },
        settings: {
            title: '설정',
            autoFullscreen: '자동 전체화면 모드',
            speed: '리듬 아이콘 속도',
            noteScale: '리듬 아이콘 크기',
            judgeOffset: '판정 싱크 조절',
            visualOffset: '효과 싱크 조절',
            barOpacity: '롱노트 라인 농도',
            effectVolume: '효과음 볼륨',
            backgroundDim: '배경화면 투명도',
            showSimLine: '동시 입력 라인',
            beatNote: '리듬 색각 서포트',
            mirror: '반전',
            laneEffect: '게임 이펙트',
            resolution: '고 해상도'
        },
        guide: {
            title: '환영합니다!',
            selectLanguage: '첫 방문이신가요? 언어를 선택해주세요. 나중에 상단 오른쪽 버튼으로 변경 가능합니다.',
            changeSettings: '플레이 스타일에 맞춰서 설정을 변경해주세요. 나중에 변경 가능합니다.',
            complete: '좋아요! 초기 세팅을 완료했습니다. 즐겨주시기 바랍니다.',
            next: '다음',
            skip: '건너뛰기'
        }
    },
    home: {
        play: {
            title: '채보',
            mapSource: '채보 파일 위치',
            bestdori: {
                title: 'Bestdori',
                mapId: '노래 ID',
                songId: '채보 ID',
                type: {
                    title: '채보 종류',
                    official: '공식',
                    community: '커뮤니티'
                },
                info: {
                    name: '제목',
                    band: '밴드',
                    singer: '아티스트',
                    difficulty: '난이도',
                    level: '레벨',
                    notes: '노트 수',
                    author: '채보 제작자'
                }
            },
            local: {
                title: '파일',
                type: {
                    title: '채보 종류',
                    bbb: 'bangbangboom',
                    bd: 'Bestdori'
                },
                mapFile: '채보 파일',
                mapSource: '채보 코드',
                mapCover: '앨범 커버',
                songName: {
                    title: '제목',
                    default: '테스트 채보'
                },
                musicFile: '음악 파일'
            },
            start: '시작',
            load: '불러오기',
            loadFailed: '불러오기 오류. 다시 시도해주세요'
        },
        convert: {
            title: '변환',
            from: '파일의 종류',
            to: '변환 하려는 종류',
            fileInput: '채보 파일',
            noInput: '채보 파일을 선택해주세요.',
            convertResult: '변환 결과',
            succeeded: '변환에 성공했습니다.',
            download: '다운로드',
            serious: '정말로요?',
            convert: '변환'
        },
        space: {
            title: '싱크 계산',
            bpm: '초기 BPM',
            offset: '초기 오프셋',
            result: '노래에 {0} 만큼 공백을 더하거나 {1} 만큼 줄이면 됩니다.'
        },
        about: { title: '정보' }
    }
};