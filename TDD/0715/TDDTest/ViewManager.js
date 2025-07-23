class ViewManager {
    constructor(textManager, els) {

        if (textManager.constructor !== TextManager) {
            throw new Error('TextManager의 인스턴스가 전달도지 않았습니다!');
        }

        if (!els.inpTxt || !els.viewer || !els.btn) {
            throw new Error('TextManager의 인스턴스가 전달도지 않았습니다!');
        }

        this.textManager = textManager;

        this.inpTxt = els.inpTxt;
        this.viewer = els.viewer;
        this.btn = els.btn;

        this.btn.addEventListener('click', () => {
            this.changeValue();
        });
    }

    changeValue() {
        this.textManager.setValue({ data: this.inpTxt.value });
        this.updateView();
    }

    updateView() {
        this.viewer.textContent = this.textManager.getValue();
    }
}