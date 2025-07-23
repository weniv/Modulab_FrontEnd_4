describe('텍스트 관리자 입니다.', () => {

    const textManager = new TextManager();

    it('텍스트 값을 반환합니다.', () => {
        const value = textManager.getValue();

        expect(textManager.getValue()).toBe(value);
    });


    it('텍스트 값을 수정합니다.', () => {
        const newValue = { data: 'hello weniv' };
        textManager.setValue(newValue);

        expect(textManager.getValue()).toBe(newValue.data);
    });

});