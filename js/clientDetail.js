var mainSaveBtn = new Vue({
    el : "#mainSaveBtn",
    methods:{
        saveBtn : function(event){
            if (!confirm("저장하시겠습니까?")) {
                // 취소
                alert("취소(아니오)를 누르셨습니다.");
            } else {
                // 성공
                // 성공 후 업데이트 처리

                // 성공 앨럿
                alert("저장되었습니다.");
            }
        }
    }
})  