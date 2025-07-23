describe('데이터를 화면에 출력하고, 클릭이벤트를 테스트합니다.', () => {
    it('textManager 인스턴스가 잘 전달됐는지 확인합니다', () => {

        const textManager = null;
        const viewer = document.createElement('strong');
        const btn = document.createElement('button');
        const inpTxt = document.createElement('input');

        const actual = () => new ViewManager(textManager, { viewer, btn, inpTxt });

        expect(actual).toThrowError();
    });

    it('html 요소들이 잘 전달되었는지 확인합니다.', () => {

        const textManager = new TextManager();
        const viewer = document.createElement('strong');
        const btn = document.createElement('button');
        const inpTxt = null;

        const actual = () => new ViewManager(textManager, { viewer, btn, inpTxt });

        expect(actual).toThrowError();
    });

    const textManager = new TextManager();
    const viewer = document.createElement('strong');
    const btn = document.createElement('button');
    const inpTxt = document.createElement('input');

    const viewManager = new ViewManager(textManager, { viewer, btn, inpTxt });


    it('click 이벤트가 발생했을 때 chagneValue 함수를 호출합니다.', () => {

        // 특정 모듈의 함수를 감시합니다.
        spyOn(viewManager, 'changeValue');

        btn.click();
        // toHaveBeenCalled: 함수가 호출된 적이 있는지 판별합니다.
        expect(viewManager.changeValue).toHaveBeenCalled();
    });


    it('updateView 함수를 실행합니다.', () => {
        spyOn(viewManager, 'updateView');

        viewManager.changeValue();

        expect(viewManager.updateView).toHaveBeenCalled();
    });

});