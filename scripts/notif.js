(function(){
    function notifyMe() {
        // Verifica se o browser suporta notificações
        if (!("Notification" in window)) {
            alert("Este browser não suporta notificações de Desktop");
        }

        // Se jpa tem permissão, de um oi!
        else if (Notification.permission === "granted") {
            const notification = new Notification("Hi there!");
        }

        // Senão, pedimos oermissao
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(function (permission) {
                // If the user accepts, let's create a notification
                if (permission === "granted") {
                    const notification = new Notification("Hi there!");
                }
            });
        }

        // At last, if the user has denied notifications, and you
        // want to be respectful there is no need to bother them any more.
    }
});
