import { useEffect, useRef, useState } from "react";
import { Modal as DefaultModal, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import theme from "../styles/theme";
import Button from "./button";
import { CloseIcon } from "./icons";

const Modal = ({ title, modalRef, footerElement, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef();

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    const pressOutsideModal = ({ target }) => {
        if(target === containerRef.current) close();
    }

    useEffect(() => {
        modalRef.open = open;
        modalRef.close = close;
    }, []);

    return (
        <DefaultModal
            animationType="fade"
            transparent={true}
            visible={isOpen}
        >
            <TouchableOpacity
                style={styles.modal}
                activeOpacity={1}
                onPress={pressOutsideModal}
                ref={containerRef}
            >
                <View style={styles.dialog}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>{title}</Text>
                        <TouchableOpacity onPress={close}>
                            <CloseIcon/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.body}>
                        {typeof children === "string" ?
                            <Text>{children}</Text>
                            :
                            <View>{children}</View>
                        }
                    </View>
                    <View>
                        <View style={styles.footer}>
                            {footerElement}
                            <Button type="secondary1" onPress={close}>Cerrar</Button>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </DefaultModal>
    );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: "#00000099"
    },
    dialog: {
        backgroundColor: theme.background1,
        width: "90%",
        marginHorizontal: "5%",
        marginTop: 10,
        borderRadius: 5
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderBottomWidth: 2,
        borderBottomColor: theme.background2
    },
    headerText: {
        fontSize: 16,
        color: theme.fontColor1
    },
    body: {
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    footer: {
        borderTopWidth: 2,
        borderTopColor: theme.background2,
        paddingHorizontal: 15,
        paddingVertical: 5,
    }
});

export default Modal;