package co.com.sofka.back.dto;

public class RequestDTO {

    private int cantidadDeCaracteres;
    private int cantidadDeCodigos;
    private boolean numeric;
    private boolean upperCase;
    private boolean lowerCase;


    public int getCantidadDeCaracteres() {
        return cantidadDeCaracteres;
    }

    public void setCantidadDeCaracteres(int cantidadDeCaracteres) {
        this.cantidadDeCaracteres = cantidadDeCaracteres;
    }

    public int getCantidadDeCodigos() {
        return cantidadDeCodigos;
    }

    public void setCantidadDeCodigos(int cantidadDeCodigos) {
        this.cantidadDeCodigos = cantidadDeCodigos;
    }

    public boolean isUpperCase() {
        return upperCase;
    }

    public void setUpperCase(boolean upperCase) {
        this.upperCase = upperCase;
    }

    public boolean isLowerCase() {
        return lowerCase;
    }

    public void setLowerCase(boolean lowerCase) {
        this.lowerCase = lowerCase;
    }

    public boolean isNumeric() {
        return numeric;
    }

    public void setNumeric(boolean numeric) {
        this.numeric = numeric;
    }
}
